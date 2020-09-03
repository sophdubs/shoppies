import React from 'react';


function Nominee(props) {
 
  return (
   <li>
     <p>{props.nominee}</p>
     <button>Remove</button>
   </li>
  );
}

export default Nominee;