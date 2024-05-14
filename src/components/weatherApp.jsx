import React, { useState } from "react";
import WeatherForm from "./weatherForm";
import process from "process";

const WeatherApp = () => {

  const [weather, setWeather] = useState(null);

  async function loadInfo(city = "london"){
    try{
      const request = await fetch(`${process.env.REACT_APP_URL}&key${process.env.REACT_APP_KEY}&q=${city}`);

      const json = await request.json();
      console.log(json);

    } catch(error){

    }
  }

  function handleChangeCity(city){
    setWeather(null);

    loadInfo(city);
  }


  return(
    <>
      <WeatherForm onChangeCity={handleChangeCity}/>
      <div className="info">Info</div>
    </>
  )
}

export default WeatherApp;