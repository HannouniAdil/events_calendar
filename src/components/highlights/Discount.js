import React, {useEffect, useState} from 'react';
import {Fade, Slide} from 'react-awesome-reveal';


const Discount = () => {

  const end = 30;
  const [start,setStart] = useState(0);

  const porcentage = () => {
      if(start < end){
          setStart(prevCount => prevCount+1)
      }   
  }

  useEffect(()=>{
      if( start > 0 && start < 30){
          setTimeout(()=>{
              setStart(prevCount => prevCount+1)
          },30)
      }
  },[start])

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade
        onVisibilityChange={(inView)=>{
          if(inView){
            porcentage()
          }
        }}
        >
          <div className='discount_porcentage'>
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right={true}>
          <div className='discount_description'>
            <h3>Purchase tickets before end of this Weekend</h3>
            <p>
            U2 tickets on the secondary market can vary depending on a number of factors. Typically, U2 tickets can be found for as low as $76.00, with an average price of $177.00.
            </p>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
