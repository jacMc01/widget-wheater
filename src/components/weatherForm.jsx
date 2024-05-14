import React, { useState } from "react";

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState("London");
    
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
      <label htmlFor="city-input">Enter City:</label>
      <input id="city-input" type="text" onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  </>
  )
}

export default WeatherForm;