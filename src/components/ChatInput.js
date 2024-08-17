import React, { useState } from 'react';
import './ChatInput.css'; 
import { FaPaperPlane } from 'react-icons/fa';

const ChatInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && typeof onSend === 'function') {
      onSend(message);
      setMessage('');
    } else {
      console.error('onSend is not a function');
    }
  };

  return (
    <div className="chat-input-container">
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type a message..."
          className="chat-input-field"
        />
        <button type="submit" className="chat-input-button">
          <FaPaperPlane />
        </button>
      </form>
    </div>
  );
};

export default ChatInput;