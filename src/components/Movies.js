import React from 'react';
import Movie from './Movie';

function Movies(props) {
  const movies = props.movieList.map(movie => <Movie movie={movie}/>)
  return (
    <div>
      <h2>Movies</h2>
      <ul className="movies">
        {movies}
      </ul>
   </div>
  );
}

export default Movies;