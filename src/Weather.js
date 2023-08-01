import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/04d@2x.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form id="search-form" class="mb-">
              <div class="row">
                <div class="col-10">
                  <input
                    type="search"
                    placeholder="Type a city"
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
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
            <div className="row">
              <div className="col-8">
                <h1 id="city">{weatherData.city}</h1>
              </div>
              <div class="col-4">
                <button class="button-current">Current Location</button>
              </div>
            </div>
            <ul>
              <li id="date">
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize" id="description">
                {weatherData.description}
              </li>
            </ul>

            <div class="row">
              <div class="col-6">
                <div class="d-flex weather-temperature">
                  <img
                    src={weatherData.iconUrl}
                    id="icon"
                    alt={weatherData.description}
                  />
                  <div>
                    <strong id="temperature">
                      {Math.round(weatherData.temperature)}
                    </strong>
                    <span class="units">
                      <a href="#" id="celsius-link" class="active">
                        °C{" "}
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              <div class="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">{weatherData.humidity}</span>%
                  </li>
                  <li>
                    Wind:<span id="wind">{Math.round(weatherData.wind)}</span>{" "}
                    km/h
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "7dc301a446bb9379190bcbafb3374dfc";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
