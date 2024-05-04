'use client';
// Searchbar.tsx
import React, { useEffect, useState } from 'react';
import { FaSearch } from "react-icons/fa";


function Searchbar() {
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [text, setText] = useState('');

  useEffect(()=>{
console.log(text);
  }, []);


  const toggleSearchInput = () => {
    setIsInputVisible(!isInputVisible);
  };

 

  return (
    <div className="search-container">
      <button className="search-icon" onClick={toggleSearchInput}>
        <FaSearch />
      </button>
      <form className="search-form" action="#" method="get"> 
        <input type="text" onChange={e => setText(e.target.value)} className={`search-input ${isInputVisible ? 'show' : ''}`} placeholder="Search..." name="q" /> 
        
      </form>
    </div>
  );
}

export default Searchbar;
