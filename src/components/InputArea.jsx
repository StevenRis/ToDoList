import React, { useState } from 'react';

function InputArea(props) {
  const [inputText, setInputText] = useState('');

  const [isValid, setIsValid] = useState(true);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (inputText.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setInputText('');
    setIsValid(true);

    props.onAdd(inputText);
  };

  return (
    <div>
      <form className='form' onSubmit={formSubmitHandler}>
        <input
          onChange={handleChange}
          type='text'
          value={inputText}
          style={{ borderBottomColor: isValid ? '#fdcb6e' : '#fd6e6e' }}
        />
        <button type='submit'>
          <span>Add</span>
        </button>
      </form>
    </div>
  );
}

export default InputArea;
