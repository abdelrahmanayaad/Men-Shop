import React, {useState} from 'react';
import {Validate} from './Validate';
function useInput(initialInputValue, rule) {
  const [input, setInput] = useState({
    value: initialInputValue || '',
    isValid: false,
    touched: false,
  });

  const updateInputValue = inputVal => {
    setInput({
      value: inputVal,
      isValid: Validate(inputVal, rule),
      touched: true,
    });
  };
  return [input, updateInputValue];
}

export default useInput;
