import React from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

const ShowWeather = ({ current, location }) => {
  return (
    <>
      <div className=" p-5 text-white rounded-md flex justify-center lg:justify-start items-center flex-col h-full mt-8 lg:mx-0 lg:mr-10 lg:mt-10 bg-blue-700 pt-5 gap-4">
        <div className="weather w-full flex justify-start gap-2 items-center">
          <div className="icon">
            <img src={current.condition.icon} alt="" />
          </div>
          <div className="weather text-4xl font-medium">{current.condition.text}</div>
        </div>

        <div className="temprature w-full flex items-center justify-start ">
          <p className="flex justify-center items-center font-semibold gap-2">
            <FaTemperatureLow className="text-2xl" /> Temprature :
          </p>
          <p className="px-2 font-bold text-4xl"> {current.temp_c}<span className="text-2xl">°C</span></p>
        </div>
        <div className="humidity w-full flex items-center justify-start ">
          <p className="flex justify-center items-center font-semibold gap-2">
            <WiHumidity className="text-3xl ml-[-7px]" /> Humidity :
          </p>
          <p className="px-2 font-semibold text-3xl"> {current.humidity}<span className="text-2xl">%</span></p>
        </div>
        <div className="location w-full flex flex-col justify-start items-center">
          <ul className="mx-auto flex justify-start w-full flex-col">
            <li>
            <p className="text-2xl font-bold">Location</p>
            </li>
            <li>
            <p className="font-medium">City : <span className="font-normal">{location.name}</span></p>
            </li>
            <li>
            <p className="font-medium">Region : <span className="font-normal">{location.region}</span></p>
            </li>
            <li>
            <p className="font-medium">Country : <span className="font-normal">{location.country}</span></p>
            </li>
          </ul>
         
  
          

        </div>
      </div>
    </>
  );
};

export default ShowWeather;
