import React, { useState } from "react";
import Progress from "./ProgressBar";

function Nominate (props) {
    const removeNominate = (movie) => {
        props.nominationsData(movie);
    }
    return (
        <div className="nomination-movies">
            <h3 className="internal-header">Your Nominations</h3>
            {/* <Progress done={props.nominateMovies.length*20}/> */}
            <div class="progress">
            <div class="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: props.nominateMovies.length*20 + "%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>

            {
                props.nominateMovies.length <= 0 ?  <p>Please Nominate a movie</p> :  
                props.nominateMovies.map((movie, index) => (
                    <div className="movie_card" key={movie.imdbID}>
                        {/* <img src={movie.Poster} className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>
                            {/* <p className="movie_info">{movie.Year}</p> */}
                            <div className="movie-info-section">
                                <span className="movie_info">{movie.Year}</span>
                                <button type="button" className="btn btn-outline-info" onClick={ () => removeNominate(movie) }>Remove</button>
                            </div>
                        </div>
                    </div>
                    
                ))
            }
            {/* <h3>Nominations Progress</h3> */}
            
		    
            {props.nominateMovies.length === 5 ? 
            <div className="max-alert">Maximum 5 Nominations are allowed</div>
            :''
            }
            
        </div>    
      );
};

export default Nominate;


// function Nominate() {
//     function handleChange(){
        
//     }


//   return (
//     <>
//     <button onclick={handleChange} type="button" class="btn btn-danger">Nominate</button>
//     </>
//   );
// }

// export default Nominate;
