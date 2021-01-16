import React from "react";
import Nominate from "./Nominate";

function MovieList(props) {
    // const nominate = props.nominate;
    const addToNominate = (movie) => {
        console.log(movie, '====');
        props.nominationsData(movie);
    }
  return (
    <div className="search-movies"> 
        <h3 className="internal-header col">Results</h3>
        <div className='search-movies-list'>
        {   
            props.movies.Response === 'False' ?  <p>{props.movies.Error}</p> :  
            props.movies.Search.map((movie, index) => (
                <div className="movie_card" key={movie.imdbID}>
                    <img src={movie.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <div className="movie-info-section">
                            <span className="movie_info">{movie.Year}</span>

                            <button type="button" 
                                className="btn btn-outline-info" 
                                onClick={() => addToNominate(movie)}
                                disabled = { props.nominatedMoviesList.length === 5 || props.nominatedMoviesList.findIndex( item => item.imdbID === movie.imdbID) !== -1} 
                            >Nominate</button>
                        </div>
                    </div>
                </div>
                
            ))
        }
        </div>
    </div>
        

  );
  
};

export default MovieList;