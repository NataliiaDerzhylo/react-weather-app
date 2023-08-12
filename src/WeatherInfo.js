import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1 id="city">{props.data.city}</h1>
        </div>
      </div>
      <ul>
        <li id="date">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize" id="description">
          {props.data.description}
        </li>
      </ul>

      <div className="row" id="icon-temp">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <WeatherIcon code={props.data.icon} size={64} />

            <div>
              <strong id="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units">°C </span>
            </div>
          </div>
        </div>

        <div className="col-6" id="additional">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind:<span id="wind">{Math.round(props.data.wind)}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
