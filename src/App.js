import React, { useState, useEffect } from 'react';
import { Button , FormControl, InputLabel, Input, Card} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username: 'sonny', text: 'Hey guys'},
    {username: 'Haris', text: 'Whats Up'}
  ]);

  const [username, setUsername] = useState(['']);

  //useState = variable in REACT
  //useEffect = run code on a condition in REACT

  useEffect(() => {
    // run code here
    //if its blank inside [], this code runs ONCE wheb the app components loads
    //if we have a variable like input, it runs every time the varaible's value changes

    //const username = prompt('Please Enter Your Name.')
    setUsername(prompt('Please Enter Your Name.'))
  }, []) //condition

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello Slick Programmer :rock! </h1>
      <h2>Welcome, {username}</h2>

    <form>
      <FormControl>
        <InputLabel >Enter Message</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled={!input} variant='contained' color="primary" type='submit' onClick={sendMessage}>Send Message</Button>
  
      </FormControl>
    </form>

      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
