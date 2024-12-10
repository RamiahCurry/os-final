/* eslint-disable */
import React, { useEffect, useState } from 'react';

const ChatBox = () => {
  const [messageList, setMessageList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const socket = io('https://morehouse-flight-engine-20217cf44eba.herokuapp.com');

    socket.on('chat message', (msg) => {
      setMessageList(prevMessages => [...prevMessages, msg]);
      console.log('Saved Messages:', messageList); // Log saved messages to the console
    });

    return () => {
      socket.disconnect();
    };
  }, [messageList]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const socket = io();
      socket.emit('chat message', inputValue);
      setInputValue('');
    }
  };

  const chatContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px',
  };

  const messagesStyle = {
    width: '100%',
    overflowY: 'auto',
    marginBottom: '10px',
  };

  return (
    <div style={chatContainerStyle}>
      <h1>Real-Time Chat Application</h1>
      <div id="messages" style={messagesStyle}>
        {messageList.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
        <input
          id="input"
          autoComplete="off"
          autoFocus
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{ width: 'calc(100% - 70px)', marginRight: '10px' }}
        />
        <button type="submit" style={{ width: '60px' }}>Send</button>
      </form>
    </div>
  );
};

export default ChatBox;
