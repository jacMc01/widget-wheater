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
    <div       className={`flex flex-col items-center min-h-screen ${
        weather
          ? {
              Sunny: "bg-gradient-to-b from-yellow-200 to-orange-300",
              "Partly cloudy": "bg-gradient-to-t from-blue-300 to-blue-100",
              Cloudy: "bg-gradient-to-t from-gray-400 to-gray-200",
              Rainy: "bg-gradient-to-b from-blue-400 to-blue-200",
              Clear: "bg-gradient-to-t from-blue-500 to-cyan-300",
              "Patchy rain nearby": "bg-gradient-to-b from-gray-300 via-blue-200 to-gray-300"
            }[weather.current.condition.text]
          : "bg-gray-100"
      }`}>
          <WeatherForm onChangeCity={handleChangeCity} />

          <div className="bg-white p-8 rounded-lg shadow-lg mt-8 max-w-md w-full">
            {weather ? (
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Weather in {weather.location.name}, {weather.location.country}
                </h2>
                <img 
                  src={weather.current.condition.icon} 
                  alt="Weather Icon" 
                  className="w-40 h-40 mb-4" 
                />
                <div className="text-center space-y-2">
                  <p className="text-4xl font-bold text-gray-800">
                    {weather.current.temp_c}°C
                  </p>
                  <p className="text-lg text-gray-600">
                    Feels like {weather.current.feelslike_c}°C
                  </p>
                  <p className="text-lg text-gray-600">
                    {weather.current.condition.text}
                  </p>
                </div>
              </div>
            ) : (
              <p className="text-center text-gray-500">
                No weather information available
              </p>
            )}
          </div>
        </div>
    </>
  )
}

export default WeatherApp;