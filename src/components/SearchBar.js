import React, {useState} from 'react';


function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const updateSearchTerm = e => {
    setSearchTerm(e.target.value);
  }

  const triggerSearch = e => {
    //api call with searchTerm
  }
  
  return (
   <div>
     <input type="text" value={searchTerm} onChange={updateSearchTerm} placeholder="Type movie title"/>
     <button onClick={triggerSearch}>Search</button>
   </div>
  );
}

export default SearchBar;