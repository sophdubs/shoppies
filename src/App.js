import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";
import Nominees from "./components/Nominees";
import axios from 'axios';
const KEY = process.env.REACT_APP_OMDB_API_KEY;

function App() {
  const [movies, setMovies] = useState(['Movie1', 'Movie2', 'Movie3', 'Movie4', 'Movie5']);
  
  const fetchMovies = searchTerm => {
    axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${KEY}`)
    .then(results => {
      console.log(results);
    })
  }


  return (
    <div className="app">
      <Header/>
      <SearchBar fetchMovies={fetchMovies}/>
      <main class="main-container">
        <Movies movieList={movies}/>
        <Nominees/>
      </main>
    </div>
  );
}

export default App;
