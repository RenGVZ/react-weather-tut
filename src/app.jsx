import React, { Component } from 'react';
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

  // calcCelsius(temp) {
  //   let cel = Math.floor(temp - 273.15);
  //   return cel
  // }

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
      const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`);
      const response = await apiCall.json();
      console.log(response);
      this.setState({ 
        city: `${response.name}`,
        country: response.sys.country,
        weather: response.weather,
        celsius: (Math.round(response.main.temp)),
        description: response.weather[0].main,
        error: false
      });
      this.getWeatherIcon(this.weatherIcon, response.weather[0].id)
      } else{
        this.setState({error: true})
      }
  }
  
  render() {
    return(
      <div className={(this.state.city !== 'undefined') ? ((this.state.temp_max > 22) ? 'app warm' : 'app') : 'app'}>
        <main>
          <Form loadWeather={this.getWeather} error={this.state.error}/>
          <Weather 
            weather={this.state.weather}
            city={this.state.city} 
            country={this.state.country}
            celsius={this.state.celsius} 
            weatherIcon={this.state.icon} 
            main={this.state.main}
            description={this.state.description}
          />
        </main>
      </div>
    );
  }
}

export default App;
