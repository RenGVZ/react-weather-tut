import React from 'react';
import '../styles/form_style.css'

const Form = props => {
  return (
    <div className="container">
    <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadWeather}>     
        <input type="text" 
          className="form-control" 
          name="city" 
          autoComplete="off"
          placeholder="Type a city..."
        />
        <button className="btn btn-warning mt-4">Get Weather</button>
      </form>
    </div>
  );
}

function error() {
  return (
    <div className="alert alert-danger" role="alert">
      Please enter a city
    </div>
  );
}

export default Form;