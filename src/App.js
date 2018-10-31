import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import './App.css';
const API_KEY = 'b5a467586d26b26351341ff04b7900ff';

// initialize component
//creates and isntance of app and it ex
class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async event => {
    event.preventDefault();
    const zipcode = event.target.elements.zipcode.value;
    console.log(
      'zipcode',
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&APPID=${API_KEY}`
    );

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&APPID=${API_KEY}`
    );
    console.log('api_call', api_call);
    const data = await api_call.json();
    console.log('data', data);
    if (zipcode) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter a valid zip code'
      });
    }
  };

  render() {
    return (
      <div className="container">
        <Title />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
