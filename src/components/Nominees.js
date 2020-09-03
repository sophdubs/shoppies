import React from 'react';
import Nominee from './Nominee';

function Nominees() {
  const nomineeList = ['first', 'second', 'third', 'fourth', 'fifth'];
  const nominees = nomineeList.map(nominee => <Nominee nominee={nominee}/>)
  return (
    <div>
      <h2>Nominees</h2>
      <ul className="nominees">
        {nominees}
      </ul>
   </div>
  );
}

export default Nominees;