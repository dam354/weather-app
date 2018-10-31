import React from 'react';

const Weather = props => (
  <div className="weather">
    <div className="row">
      {props.city &&
        props.country && (
          <p>
            Location: {props.city}, {props.country}
          </p>
        )}
    </div>
    <div className="row">
      {props.temperature && (
        <p>
          Temp: {props.temperature}
          &#8457;
        </p>
      )}
    </div>

    <div className="row">
      {props.humidity && <p>humidity: {props.humidity}</p>}
    </div>

    <div className="row">
      {props.description && <p>condition: {props.description}</p>}
    </div>
    <div className="row">{props.error && <p>{props.error}</p>}</div>
  </div>
);

export default Weather;
