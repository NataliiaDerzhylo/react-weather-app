import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "7dc301a446bb9379190bcbafb3374dfc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
    // search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form onSubmit={handleSubmit} id="search-form" class="mb-">
              <div class="row">
                <div class="col-10">
                  <input
                    type="search"
                    placeholder="Type a city"
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                    onChange={handleCityChange}
                  />
                </div>

                <div class="col-2">
                  <input
                    type="submit"
                    value="search"
                    class="btn btn-primary w-100"
                    id="search-button"
                  />
                </div>
              </div>
            </form>

            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
