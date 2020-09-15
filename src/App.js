import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
import Weather from './components/weather_component';
import key from './key';

class App extends Component {
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      weather: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false
    };
    this.getWeather();
  }

  getWeather = async () => {
    const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=seattle&appid=${key}`);
  
    const response = await apiCall.json();

    console.log(response);

    this.setState({ 
      city: response.name,
      country: response.sys.country,
      weather: response.weather,
      icon: response.weather[0].icon,
      // main: ,
      celsius: response.main.temp,
      temp_max: response.main.temp_max,
      temp_min: response.main.temp_min,
      description: response.weather,
      error: false
    })
  }
  
  render() {
    return(
      <div className="App">
        <Weather 
          city={this.state.city} 
          country={this.state.country}
          celsius={this.state.celsius} 
          weather={this.state.weather}
          icon={this.state.icon} 
          main={this.state.main}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
