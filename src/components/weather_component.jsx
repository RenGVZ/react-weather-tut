import React from 'react';
import '../styles/weather-style.css'

const Weather = ({city, country, celsius, description, weatherIcon}) => {
  const dateBuilder = (d) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return(
    <div className="container">
      {city ? (
        <div>
          <div className="location-box">
            <div className="location"><h1>{city}, {country}</h1></div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <h5 className="py-4">
            <i className={`wi ${weatherIcon} display-1 weather-icon`}></i>
          </h5>
          <div className="weather-box">
            <div className="temp">
              {(celsius)}&deg;C
            </div>
            <div className="weather">{description}</div>
          </div>
        </div>
        ): null}
    </div>
  );
}

export default Weather;