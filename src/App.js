import "./App.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
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
          href="https://www.instagram.com/natalia_zhill/"
          target="_blank rel=noopener"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
