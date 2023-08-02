import React from "react";
import axios from "axios";

export default function WeatherComponent() {
  const apiKey = "7dc301a446bb9379190bcbafb3374dfc";

  function showCurrentPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function displayTemperature(response) {
    // Implement your logic to display temperature data here
    console.log(response.data);
  }

  function showGeoLocation() {
    navigator.geolocation.getCurrentPosition(showCurrentPosition);
  }

  return (
    <div>
      <button className="button-current" onClick={showGeoLocation}>
        Current Location
      </button>
      {/* Implement your UI elements to display temperature data */}
    </div>
  );
}
