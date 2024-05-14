import React, { useState } from "react";
import WeatherForm from "./weatherForm";
import process from "process";

const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  async function loadInfo(city = "london"){
    try{
      const api_url = `${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${city}`
      
      console.log(api_url);

      const request = await fetch(api_url);

      const json = await request.json();
      setWeather(json);

      console.log(json);

    } catch(error){
      console.log("Error description:")
      console.log(error)
    }
  }

  function handleChangeCity(city){
    setWeather(null);

    loadInfo(city);
  }


  return(
    <>
      <WeatherForm onChangeCity={handleChangeCity} />
      <div className="info bg-gray-100 p-6 rounded-lg shadow-md">
        {weather? (
          <div>
            <h3 className="text-xl font-semibold mb-4">Weather Info:</h3>
            <img src={weather.current.condition.icon} alt="Weather Icon" className="w-32 h-32 mx-auto mb-4" />
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">Temperature: {weather.current.temp_c}°C</p>
              <p className="text-lg font-semibold">Feels Like: {weather.current.feelslike_c}°C</p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No weather information available</p>
        )}
      </div>
    </>
  )
}

export default WeatherApp;