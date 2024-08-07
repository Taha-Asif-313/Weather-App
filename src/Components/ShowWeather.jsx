import React from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const ShowWeather = ({ current, location }) => {
  return (
    <>
      <div className=" p-5 h-[80%] w-full text-white rounded-lg flex justify-center lg:justify-start items-center flex-col lg:mx-0 border-2 border-amber-600 pt-5 gap-4">
        <div className="weather w-full flex justify-start gap-2 items-center">
          <div className="icon">
            <img src={current.icon} alt="" />
          </div>
          <div className="weather text-lg lg:text-4xl font-medium">{current.conditions}</div>
        </div>

        <div className="temprature w-full flex items-center justify-start ">
          <p className="flex justify-center items-center font-semibold gap-2">
            <FaTemperatureLow className="text-lg" /> Temprature :
          </p>
          <p className="px-2 font-bold text-2xl lg:text-4xl"> {current.temp}<span className="text-lg lg:text-2xl">°C</span></p>
        </div>
        <div className="humidity w-full flex items-center justify-start ">
          <p className="flex justify-center items-center font-semibold gap-2">
            <WiHumidity className="text-3xl ml-[-7px]" /> Humidity :
          </p>
          <p className="px-2 font-semibold text-2xl lg:text-3xl"> {current.humidity}<span className="text-lg lg:text-2xl">%</span></p>
        </div>
        <div className="location w-full flex flex-col justify-start items-center">
          <ul className="mx-auto flex justify-start w-full items-center">
        
            <p className="text-2xl font-bold">Location : <span className="text-lg font-normal">{location}</span></p>
           
          </ul>
         
  
          

        </div>
      </div>
    </>
  );
};

export default ShowWeather;
