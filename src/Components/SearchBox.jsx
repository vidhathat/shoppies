import React, { useState } from "react";
import  searchIcon from "../assets/searchIcon.png"
// import axios from 'axios'


function SearchBox(props) {
    let [searchInput, setSearchInput] = useState('');
    const handleInputChange = () => {
        if(searchInput.value) {
            fetch(`http://www.omdbapi.com/?s=${searchInput.value}&apikey=cd35c9de`)
        .then(res => res.json())
        .then((data) => {
            if(data.Response === 'False' || data.Response === 'True') {
                props.results(data);
            }
            
        })
        }
        

    }
  return (
    <div className="search-box">
        {/* <input
         placeholder="Enter the Movie name here.."
         ref={input => setSearchInput(input)}
         onChange={() => handleInputChange()}
       /> */}
       <input type="text" 
        ref={input => setSearchInput(input)}
        onChange={() => handleInputChange()} 
        placeholder="Search" 
        className="search-input" />
            <div className="search-icon">
                {/* <span className="glyphicon glyphicon-search"></span> */}
                {/* <searchIcon /> */}
                <img src={searchIcon} alt='search' />
            </div>
    </div>
  );
}

export default SearchBox;