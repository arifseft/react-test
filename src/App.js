import React from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=London,uk&unit=metric&APPID=51971f23667365b046c16ad6b2d76dfa"
    );
	const resJSON = await apiRes.json();
	return resJSON;
  };
  console.log(data());
  return (
    <div className="App">
      <WeatherCard temp={30} condition="Clear" city="Jakarta" country="ID" />
      <WeatherCard temp={13} condition="Rain" city="Jakarta" country="ID" />
      <WeatherCard temp={2} condition="Tornado" city="Jakarta" country="ID" />
    </div>
  );
}

export default App;
