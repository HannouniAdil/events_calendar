import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './Duedate';


const Featured = () => {
  return(
    <div className='featured_container'>
      <Carrousel/>
        <div className='artist_name'>
          <div className='wrapper'>
          U2 On Tour
          </div>
        </div>
        <TimeUntil/>
    </div>
  )

}


export default Featured;