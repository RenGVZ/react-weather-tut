import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
import Weather from './components/weather_component';
import key from './key';
import Form from './components/form_component';

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

    this.weatherIcon = {
      Thunderstorm:"wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    }
  }

  calcCelsius(temp) {
    let cel = Math.floor(temp - 273.15);
    return cel
  }

  getWeatherIcon(icons, rangeId){
    switch(true){
      case rangeId >= 200 && rangeId <= 232:
        this.setState({icon: this.weatherIcon.Thunderstorm});
        break;
      case rangeId >= 300 && rangeId <= 321:
        this.setState({icon: this.weatherIcon.Drizzle});
      break;
      case rangeId >= 500 && rangeId <= 531:
        this.setState({icon: this.weatherIcon.Rain});
      break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({icon: this.weatherIcon.Snow});
      break;
      case rangeId >= 701 && rangeId <= 781:
        this.setState({icon: this.weatherIcon.Atmosphere});
      break;
      case rangeId === 800:
        this.setState({icon: this.weatherIcon.Clear});
      break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({icon: this.weatherIcon.Clouds});
      break;
      default:
        this.setState({icon: this.weatherIcon.Clouds});
      break;
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;

    if(city) {
      const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
      const response = await apiCall.json();
      console.log(response);
      this.setState({ 
        city: `${response.name}`,
        country: response.sys.country,
        weather: response.weather,
        celsius: this.calcCelsius(response.main.temp),
        temp_max: this.calcCelsius(response.main.temp_max),
        temp_min: this.calcCelsius(response.main.temp_min),
        description: response.weather[0].description,
        error: false
      });
      this.getWeatherIcon(this.weatherIcon, response.weather[0].id)
      } else{
        this.setState({error: true})
      }
  }
  
  render() {
    return(
      <div className="App">
        <Form loadWeather={this.getWeather} error={this.state.error}/>
        <Weather 
          city={this.state.city} 
          country={this.state.country}
          celsius={this.state.celsius} 
          weatherIcon={this.state.icon} 
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
