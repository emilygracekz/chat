import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const App = () => {
    const [userName, setUserName] = useState('');
    const [text, setText] = useState("");

    axios.post('http://localhost:3001/comments', {
    name: {userName},
    text: {text}
    }).then((response) => {
  console.log(response)
  })
  .catch((error) => {
      setError('Opps, something went wrong.')
  })

axios.get('http://localhost:3001/comments', {
  name: {name},
  text: {text}
}).then((response) => {
  setUserName(name),
  setText(text)
  })
  .catch((error) => {
      setError('Opps, something went wrong.')
  })
    
  const handleSend = (e) => {
      if (input !== "") {
      e.preventDefault();
      }
    }; 

    return (
        <Container>
        <div><strong>{userName}:</strong>{text}</div>
        <TextInput
        value={text}
        onChange={(e) => {setText(e.target.value)}}
        />
        <button
        onClick={handleSend}>
        SEND</button>
        </Container>
        );
}

export default App;

const Container = styled.div`
  padding: 50px;
  text-align: left;
`;