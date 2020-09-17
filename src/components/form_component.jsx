import React from 'react';
import './form_style.css'

const Form = props => {
  return (
    <div className="container">
    <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadWeather}>
        <div className="row">
          <div className="col-12">
            <input type="text" 
              className="form-control" 
              name="city" 
              autoComplete="off"
              placeholder="Type a city..."
              />
          </div>
          <div className="col-12 mt-4 mb-4">
            <button className="btn btn-warning mb-4">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
}

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please enter a city
    </div>
  );
}

export default Form;