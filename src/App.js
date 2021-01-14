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

  // const addNomination = (movie) =>{
  //   const newNomination =[...nominations, movie];
  //   setNominate(newNomination);

  // }
  
  const ongetSearchData = (data) => {
    setSearchResults(data);
  }
  const setNominatedMovie = (movie) => {
    // setNominationsList([...nominationsList, movie]);
    setNominationsList(prevState => [...prevState, movie]);
  }
  const removeNomination = (movie) => {
    let tempArr = [...nominationsList];
    let index = tempArr.findIndex( item => item.imdbID === movie.imdbID);
    if( index !== -1) {
      tempArr.splice(index, 1)
    }
    // tempArr = index >= 0 ? tempArr.splice(index, 1) : tempArr;
    console.log(tempArr, 'changedarr', movie, index)
    // setNominationsList(changedArr);
    setNominationsList(prevState => [...tempArr]);
  }
  return (
    <div className="shoppies-app">
      <div className="header">
        <div className="d-flex align-center justify-content-between">
          <Heading heading="Shoppies" />
          <SearchBox results={ (searchData) => ongetSearchData(searchData) } />
        </div>
      </div>
       <div className="movies-list"> 
        {searchResults ?  
          <MovieList 
            movies={searchResults}
            nominatedMoviesList = {nominationsList}
            nominationsData={ (selectedMovie) => setNominatedMovie(selectedMovie) }
            listType="movies"
          /> 
          : <p>Please search for movies</p>
        }
        {/* {nominationsList.length > 0 ?  
          <Nominate 
            nominateMovies={nominationsList} 
            nominationsData={removeNomination}  
            listType='nominations'
            /> 
            : ''
        } */}

        {nominationsList.length > 0 ?  
          <Nominate 
            nominateMovies={nominationsList} 
            nominationsData={(selectedMovie) => removeNomination(selectedMovie)}  
            listType='nominations'
            /> 
            : ''
        }
      </div>

      {/* {nominationsList.length > 0 ?  
      <MovieList 
        nominations={nominationsList} 
        nominationsData={setNominationsList(list => [...nominationsList, list])}  
        listType='nominations'
        /> 
        : ''
      } */}
      {/* </div> */}
      {/* <div className="row">
      {nominationsList.length > 0 ?  <Nominate movies={searchResults} handleNominateClick={addNomination} nominate={Nominate}/> : <p>Please search for movies</p>}
      </div> */}
      {/* <div className="row d-flex align-items-center mt-4 mb-4">
      <Heading heading="Nominations" />
      </div> */}
    
    </div>
  );
}
