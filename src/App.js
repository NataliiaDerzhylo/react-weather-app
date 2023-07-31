import "./App.css";
import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lviv" />
        <footer>
          This project was coded by {""}
          <a
            href="https://www.instagram.com/natalia_zhill/"
            target="_blank rel=noopener"
          >
            {" "}
            Nataliia Derzhylo{" "}
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/NataliiaDerzhylo/react-weather-app"
            target="_blank rel=noopener"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
