import React, { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MoviesList";
import Heading from "./Components/Heading";

import SearchBox from "./Components/SearchBox";
import Nominate from "./Components/Nominate";
import Background from "./assets/backgr.png";

export default function App() {
  const [searchResults, setSearchResults] = useState();
  const [nominationsList, setNominationsList] = useState([]);
  
  useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('movie-nominations')
		);

		if (movieFavourites) {
			setNominationsList(movieFavourites);
		}
	}, []);



  
  const ongetSearchData = (data) => {
    setSearchResults(data);
  }
  const setNominatedMovie = (movie) => {
    const newNominationList = [...nominationsList, movie];
    setNominationsList(newNominationList);
    saveToLocalStorage(newNominationList);

    
  }
  const removeNomination = (movie) => {
    let tempArr = [...nominationsList];
    let index = tempArr.findIndex( item => item.imdbID === movie.imdbID);
    if( index !== -1) {
      tempArr.splice(index, 1)
    }
   
    const newNominationList =  [...tempArr]
    setNominationsList(newNominationList);
    saveToLocalStorage(newNominationList);

  }

  const saveToLocalStorage = (items) =>{
    localStorage.setItem('movie-nominations', JSON.stringify(items));
  }
  return (
    <div className="shoppies-app">
      <div className="header">
        <div className="d-flex align-center justify-content-between">
          <Heading />
          <SearchBox results={ (searchData) => ongetSearchData(searchData)
           } />
        </div>
      </div>
      <div className="shoppies-data">
      <div id="overlay"></div>
        <div className="movies-list"> 
          {searchResults ?  
            <MovieList 
              movies={searchResults}
              nominatedMoviesList = {nominationsList}
              nominationsData={ (selectedMovie) => setNominatedMovie(selectedMovie) }
              listType="movies"
            /> 
             :      <img className='background' src={Background} alt='Nominate Your Favourite Movies' />
          }
          <div className="verticalLine"></div>
          
          {nominationsList.length > 0 ?  
            <Nominate 
              nominateMovies={nominationsList} 
              nominationsData={(selectedMovie) => removeNomination(selectedMovie)}  
              listType='nominations'
              /> 
              : ''
          }
        </div>
      </div>
       
    </div>
  );
}
