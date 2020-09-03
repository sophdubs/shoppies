import React from 'react';
import './App.css';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Movies from "./components/Movies";
import Nominees from "./components/Nominees";

function App() {
  return (
    <div className="app">
      <Header/>
      <SearchBar/>
      <main class="main-container">
        <Movies/>
        <Nominees/>
      </main>
    </div>
  );
}

export default App;
