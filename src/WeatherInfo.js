import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <h1 id="city">{props.data.city}</h1>
        </div>
        <div class="col-4">
          <button class="button-current">Current Location</button>
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

      <div className="row">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={props.data.iconUrl}
              id="icon"
              alt={props.data.description}
            />
            <div>
              <strong id="temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="units">
                <a href="#" id="celsius-link" class="active">
                  °C{" "}
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-6">
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
