
import React from 'react';
import './resources/styles.css';
import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Featured from './components/featured';
import EventInfo from './components/eventInfo';
import Highlights from './components/highlights'


const App = () =>{
  return (
    <div className="App">
      <Header/>
      <div>
        <Featured/>
      </div>
      <div>
        <EventInfo/>
      </div>
      <div>
        <Highlights/>
      </div>
      <div style={{backgroundColor: 'red', height: '800px'}}></div>
      <div style={{backgroundColor: 'blue', height: '800px'}}></div>
      <div style={{backgroundColor: 'green', height: '800px'}}></div>
      <div style={{backgroundColor: 'yellow', height: '800px'}}></div>

      <Footer/>
       
    </div>
  );
}

export default App;
