import React, { useState, useEffect } from 'react';
import {Fade} from 'react-awesome-reveal'

const Description = () => {
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
    <Fade 
      onVisibilityChange={(inView)=>{
        if(inView){
          porcentage()
        }
      }}
    >
      <div className='center_wrapper'>
        <h2>Highlights</h2>
        <div className='highlight_description'>
A limited number of tickets have been set aside for current U2.com subscribers which will be available on a first-come, first-served basis from Tuesday December 12th (10 am ET). Please note: entry into the presale does not guarantee tickets and U2.com subscriptions purchased after Monday 12 December 9am ET / 2pm UK / 3pm Europe do not offer entry into the presale
        </div>
      </div>
      
    </Fade>
  )
}

export default Description
