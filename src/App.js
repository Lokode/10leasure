import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VenueInfo from './components/VenueInfo';
import Highlight from './components/Highlights';
import Location from  './components/location';

class App extends Component {
  render() {
    return (
      <div className="App" style={{height:"1500px",background:'white'}}>
        <Header/>
        <Featured/>
        <VenueInfo/>
        <Highlight/>
        <Location/>

      </div>
    );
  }
}

export default App;
