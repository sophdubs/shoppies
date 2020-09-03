import React from 'react';


function Movie(props) {
 
  return (
   <li>
     <p>{props.movie}</p>
     <button>Add</button>
   </li>
  );
}

export default Movie;