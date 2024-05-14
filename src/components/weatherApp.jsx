import React, { useState } from "react";
import WeatherForm from "./weatherForm";



const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  
  async function loadInfo(city = "London") {
    console.log("loadInfo");
    console.log(city);
    console.log(import.meta.env.VITE_APP_URL);
    console.log(import.meta.env.VITE_APP_KEY);
    
    try {
      const api_str = `${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`;
      console.log(api_str);

      const request = await fetch(api_str);

      const json = await request.json();
      setWeather(json); // Update the state with the fetched weather data
      console.log(json);

    } catch (error) {
      console.log("Error description:");
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div className="info">
        {weather ? (
          <div>
            <h3>Weather Info:</h3>
            <p>{JSON.stringify(weather)}</p> {/* Display weather information */}
          </div>
        ) : (
          "No weather information available"
        )}
      </div>
    </>
  );
}

export default WeatherApp;
