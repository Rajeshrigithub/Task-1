import React, { useState } from 'react';
import './App.css';

const WordCounter = () => {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="word-counter">
       <h1>Responsive Paragraph Word <center>Counter</center></h1>
      <div className="word-counter-textarea">
        <textarea
          placeholder="Type your text here..."
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="word-counter-info">
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
};

export default WordCounter;
