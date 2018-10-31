import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <div className="col-sm form">
      <div className="form-group">
        <div className="form-row">
          <div className="col">
            <input
              className="form-control "
              type="text"
              name="zipcode"
              placeholder="zipcode"
            />
          </div>
        </div>
        <div className="form-row mt-2">
          <div className="col">
            <button className="btn  btn-lg btn-block weatherbtn">
              Get Weather
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
);

export default Form;
