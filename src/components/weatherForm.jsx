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
      <form onSubmit={handledSubmit} className="space-y-4">
        <div className="flex items-center space-x-2">
          <label htmlFor="city-input" className="block text-sm font-medium text-gray-700">Enter City:</label>
          <input
            type="text"
            id="city-input"
            onChange={onChange}
            className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </>
  )
}

export default WeatherForm;