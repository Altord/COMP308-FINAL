import React, { useState } from 'react';

const SendMotivationalTipForm = ({ onSubmit }) => {
  const [tipText, setTipText] = useState('');

  const handleChange = (e) => {
    setTipText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(tipText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tip Text:
        <textarea value={tipText} onChange={handleChange} />
      </label>
      <button type="submit">Send</button>
    </form>
  );
};

export default SendMotivationalTipForm;
