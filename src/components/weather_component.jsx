import React from 'react';
import '../styles/weather-style.css'

const Weather = (props) => {
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
      {props.city ? (
        <div>
          <div className="location-box">
            <div className="location"><h1>{props.city}, {props.country}</h1></div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="temp">
              {(props.celsius)}&deg;C
            </div>
            <div className="weather">{props.description}</div>
            <h5 className="py-4">
              <i className={`wi ${props.weatherIcon} display-1 weather-icon`}></i>
            </h5>
          </div>
        </div>
        ): null}
    </div>
  );
}

// function minmaxTemp(min,max) {
//   if(min && max) {
//     return (
//       <h3>
//         <span className="px-4">{min}&deg;</span>
//         <span className="px-4">{max}&deg;</span>
//       </h3>
//     );
//   }
// }

export default Weather;

{/* <div className="cards pt-4"> 
  {props.city ? (
    <h1>{props.city}, {props.country}</h1>
  ): null}
  <h5 className="py-4">
    <i className={`wi ${props.weatherIcon} display-1`}></i>
  </h5>
  
  {props.celsius ? (
    <h1 className="py-2">{props.celsius}&deg;</h1>
  ): null}

//   {minmaxTemp(props.temp_min, props.temp_max)}

//   <h4 className="py-3">
//     {props.description}
//   </h4>
// </div>
  */}