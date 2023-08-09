import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Thu</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt=""
              width="42px"
            />
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max"> 30° </span>
              <span className="weather-forecast-temperature-min"> 17° </span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Wed</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt=""
              width="42px"
            />
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max"> 16° </span>
              <span className="weather-forecast-temperature-min"> 12° </span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Tue</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt=""
              width="42px"
            />
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max"> 16° </span>
              <span className="weather-forecast-temperature-min"> 11° </span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Mon</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
              alt=""
              width="42px"
            />
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max"> 20° </span>
              <span className="weather-forecast-temperature-min"> 10° </span>
            </div>
          </div>

          <div className="col-2">
            <div className="weather-forecast-date">Sun</div>
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
              alt=""
              width="42px"
            />
            <div className="weather-forecast-temperature">
              <span className="weather-forecast-temperature-max"> 19° </span>
              <span className="weather-forecast-temperature-min"> 13° </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "97c2f6a3b34509ac62090edc5d18d949";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
