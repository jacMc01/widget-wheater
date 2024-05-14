import React, { useState } from "react";

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState("");

    function onChange(e){
      const value = e.target.value;

      if(value !== ""){
        setCity(value);
      }

      setCity(value);
    }

    function handledSubmit(e){
      e.preventDefault();
      
      onChangeCity(city);
    }

  return(
    <>
      <form action="form" onSubmit={handledSubmit}>
        <input type="text" onChange={onChange} />
      </form>
    </>
  )
}

export default WeatherForm;