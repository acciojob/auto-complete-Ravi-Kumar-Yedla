import React, { useEffect, useState } from 'react'

const  fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const AutoComplete = () => {
    const[input,setInput] = useState('')
    const[suggestions,setSuggestions] = useState([])
    
    useEffect(()=>{

     const getSuggestions = ()=>{
        if(!input){
            return [];
        }
        return fruits.filter(fruit =>fruit.toLowerCase().includes(input.toLowerCase()))
     }
     setSuggestions(getSuggestions())
    },[input])

    const inputChange = (e)=>{
       setInput(e.target.value);

    }
    // const handleSuggestionClick = (suggestion) => {
    //     setInput(suggestion);
    //     setSuggestions([]);
    //   };
    // onClick={() => handleSuggestionClick(suggestion)}
    
  return (
    <div>
      <input 
      type='text'
      value={input}
      onChange={inputChange}
      />
      {suggestions.length >0 && (
        <ul>
            {suggestions.map((suggestion,index)=>(
                <li key={index} > 
                    {suggestion}
                </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default AutoComplete
