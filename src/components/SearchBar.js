import React, {useState} from 'react';


function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = e => {
    setSearchTerm(e.target.value);
  }

  const triggerSearch = e => {
    props.fetchMovies(searchTerm)
  }

  return (
   <div>
     <input type="text" value={searchTerm} onChange={updateSearchTerm} placeholder="Type movie title"/>
     <button onClick={triggerSearch}>Search</button>
   </div>
  );
}

export default SearchBar;