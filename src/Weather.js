import React from "react";
import "./Weather.css";

export default function Weather() {
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
              <h1 id="city">Lviv</h1>
            </div>
            <div class="col-4">
              <button class="button-current">Current Location</button>
            </div>
          </div>
          <ul>
            <li id="date">Saturday 10:41</li>
            <li id="description">Cloudy</li>
          </ul>

          <div class="row">
            <div class="col-6">
              <div class="d-flex weather-temperature">
                <img
                  src="http://openweathermap.org/img/wn/02d@2x.png"
                  id="icon"
                  alt="few clouds"
                />
                <div>
                  <strong id="temperature">22</strong>
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
                  Humidity: <span id="humidity">71</span>%
                </li>
                <li>
                  Wind:<span id="wind">16</span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
