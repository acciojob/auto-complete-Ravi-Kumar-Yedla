import React, { useState, useEffect } from 'react';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const AutoComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const getSuggestions = () => {
      if (!inputValue) {
        return [];
      }
      return fruits.filter(fruit =>
        fruit.toLowerCase().includes(inputValue.toLowerCase())
      );
    };

    setSuggestions(getSuggestions());
  }, [inputValue]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search fruits..."
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
