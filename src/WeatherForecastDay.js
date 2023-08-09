import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="weather-forecast-date">{props.data.dt}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={16} />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {" "}
          {Math.round(props.data.temp.max)}°{" "}
        </span>
        <span className="weather-forecast-temperature-min">
          {" "}
          {Math.round(props.data.temp.min)}°{" "}
        </span>
      </div>
    </div>
  );
}
