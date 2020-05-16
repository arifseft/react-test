import React, { useState, useEffect } from "react";

import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const [query, setQuery] = useState("Jakarta, ID");
  const [weather, setWeather] = useState({
    temp: null,
    condition: null,
    city: null,
    country: null,
  });

  const data = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=51971f23667365b046c16ad6b2d76dfa`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        condition: res.weather[0].main,
        country: res.sys.country,
        city: res.name,
      });
    });
  };
  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        condition: res.weather[0].main,
        country: res.sys.country,
        city: res.name,
      });
    });
  }, [query]);
  return (
    <div className="App">
      <WeatherCard
        temp={weather.temp}
        condition={weather.condition}
        city={weather.city}
        country={weather.country}
      />
      <form action="">
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </form>
    </div>
  );
}

export default App;
