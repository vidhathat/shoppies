import React, { useState } from "react";
function Nominate (props) {
    const removeNominate = (movie) => {
        props.nominationsData(movie);
    }
    return (
        <div className="nomination-movies">
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
