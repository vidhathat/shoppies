import React, { useEffect, useState } from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./Components/MoviesList";
import Heading from "./Components/Heading";

import SearchBox from "./Components/SearchBox";
import Nominate from "./Components/Nominate";

export default function App() {
  const [movie, setMovies] = useState();
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

    // setNominationsList(prevState => [...prevState, movie]);
    
  }
  const removeNomination = (movie) => {
    let tempArr = [...nominationsList];
    let index = tempArr.findIndex( item => item.imdbID === movie.imdbID);
    if( index !== -1) {
      tempArr.splice(index, 1)
    }
   
    // setNominationsList(changedArr);
    const newNominationList =  [...tempArr]
    setNominationsList(newNominationList);
    saveToLocalStorage(newNominationList);

    // setNominationsList(prevState => [...tempArr]);
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
            : <p className="search-movies search-msg">Please search for movies</p>
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
