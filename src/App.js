import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
import Weather from './components/weather_component';
import key from './key';

class App extends Component {
  constructor(){
    super();
    this.state = {};
    this.getWeather();
  }

  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=${key}`);
  
    const response = await apiCall.json();

    console.log(response.coord.lon);
  }
  
  render() {
    return(
      <div className="App">
        <Weather />
      </div>
    );
  }
}

export default App;
