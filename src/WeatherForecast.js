import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="weather-forecast-date">Fri</div>
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
}
