import React, { useState } from 'react';
import axios from 'axios';
import ChatInput from './ChatInput';
import Message from './Message';
import predefinedAnswers from './predefinedAnswers';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSend = async (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);

    const foundAnswer = predefinedAnswers.find((pair) =>
      pair.question.test(message)
    );

    if (foundAnswer) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: foundAnswer.answer, sender: 'bot' },
      ]);
    } else {
      try {
        const response = await axios.post('/api/chat', { message });
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: response.data.answer, sender: 'bot' },
        ]);
      } catch (error) {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Sorry, I couldn't process your request.", sender: 'bot' },
        ]);
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Chat;
