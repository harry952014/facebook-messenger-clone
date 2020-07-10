import React, { useState, useEffect } from 'react';
import { Button , FormControl, InputLabel, Input, IconButton, Icon } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase/app'
import FlipMove from 'react-flip-move'
import SendIcon from '@material-ui/icons/Send'


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    // {idusername: 'sonny', message: 'Hey guys'},
    // {username: 'Haris', tmessage: 'Whats Up'}
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


  useEffect(() => {
    //run once when the app component loads

    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))  // This is a listener for real-time data changes in the firebase DB
    });
  }, [])


  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    // setMessages([...messages, {username: username, message: input}]);
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg?w=100&h=100" width="100" height="100"/>
      <h1>Welcome, {username}</h1>

    <form className="app__form">
      <FormControl className="app__formControl">
        <InputLabel >Type a message</InputLabel>

          <Input className="app__input" placeholder="Type a message..." value={input} onChange={event => setInput(event.target.value)}/>

          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
            <SendIcon/>
          </IconButton>
      
      </FormControl>
    </form>

    <FlipMove>
      {
        messages.map(({id, message}) => (
            <Message key={id} username={username} message={message} />
        ))
      }
    </FlipMove>

    </div>
  );
}

export default App;
