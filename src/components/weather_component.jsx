import React from 'react';

const Weather = (props) => {
  return(
    <div className="container">
      <div className="cards">
        <h1>{props.city},{props.country}</h1>
        <h5 className="py-4">
          <i className="wi wi-day-sunny display-1"></i>
        </h5>
        <h1 className="py-2">{Math.floor(props.celsius - 273.15)}&deg;</h1>
        {/** show maxx and min */}
        {minmaxTemp(Math.floor(props.temp_min - 273.15), Math.floor(props.temp_max - 273.15))}
        <h4 className="py-3">
          {/* {props.description[0]} */}
        </h4>
      </div>
    </div>
  );
}

function minmaxTemp(min,max) {
  return (
    <h3>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h3>
  )
}

export default Weather;