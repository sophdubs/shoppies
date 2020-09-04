import React from 'react';


function Movie(props) {
  const movie = {
    Poster: "https://m.media-amazon.com/images/M/MV5BY2JmMDJlMmEtYTk4OS00YWQ5LTk2NzMtM2M3NzhkMjI4MGJkL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg",
    Title: "Cats & Dogs",
    Type: "movie",
    Year: "2001",
    imdbID: "tt0239395"
  }
 
  return (
   <li>
     <p>{props.movie}</p>
     <button>Add</button>
   </li>
  );
}

export default Movie;