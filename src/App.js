import "./App.css";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [search, setSearch] = useState("");
  const [tempInfo, setTempInfo] = useState("");

  useEffect(() => {
    const weatherCall = async () => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Phoenix&units=imperial&appid=${API_KEY}`
      );
      const data = await res.json();
      const tempData = data.main;
      setTempInfo(tempData);
    };
    try {
      weatherCall();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <div className="App">
      <header>Coffee Search</header>

      {/* Weather Display */}
      <div className="weather-container">
        <div className="weather-title">
          <h2>Phoenix</h2>
        </div>
        <div className="weather-info">
          {tempInfo && <p1>Current Temp: {tempInfo.temp}</p1>}
          {tempInfo && <p1>Today`s High: {tempInfo.temp_max}</p1>}
          {tempInfo && <p1>Today`s Low: {tempInfo.temp_min}</p1>}
        </div>
      </div>

      {/* Search Bar */}
      <div class="webdesigntuts-workshop">
        <form action="https://google.com/search" method="get" autocomplete="off">
          <input
            type="search"
            placeholder="What are you looking for?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="q"
            required
            autofocus
          />
          <button type="submit" value="">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
