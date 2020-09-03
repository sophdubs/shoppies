import React from 'react';
import Movie from './Movie';

function Movies() {
  const movieList = ['Movie1', 'Movie2', 'Movie3', 'Movie4', 'Movie5'];
  const movies = movieList.map(movie => <Movie movie={movie}/>)
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