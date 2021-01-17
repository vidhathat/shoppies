import React, { useState } from "react";

function Nominate (props) {
    const removeNominate = (movie) => {
        props.nominationsData(movie);
    }
    return (
        <div className="nomination-movies">
            <h3 className="internal-header">Your Nominations</h3>
            <div className="progress">
            <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: props.nominateMovies.length*20 + "%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <br></br>
            {props.nominateMovies.length === 5 ? 
            <div className="max-alert">Maximum 5 Nominations are allowed</div>
            :''
            }

            {
                props.nominateMovies.length <= 0 ?  <p>Please Nominate a movie</p> :  
                props.nominateMovies.map((movie, index) => (
                    <div className="movie_card" key={movie.imdbID}>
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            <div className="movie-info-section">
                                <span className="movie_info">{movie.Year}</span>
                                <button type="button" className="btn btn-outline-info" onClick={ () => removeNominate(movie) }>Remove</button>
                            </div>
                        </div>
                    </div>
                    
                ))
            }            
		    
            
        </div>    
      );
};

export default Nominate;

