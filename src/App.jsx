import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import ShowWeather from "./Components/ShowWeather";
import useFetch from "./Hooks/useFetch";
import Loading from "./Components/Loading";

const App = () => {
  // States
  const [city, setcity] = useState("");

  const { data, loading, error, fetchData } = useFetch(`http://api.weatherapi.com/v1/current.json?key=0b9d2407a7a44eeaa2c134317243006&q=${city}`);
  console.log(data)
  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <div className="flex justify-center items-center">{error}</div>
  }
  return (
    <div className="h-screen w-full bg-slate-50 flex lg:flex-row flex-col items-center">
      <div className="content w-[60%] lg:[50%] h-[30%] flex flex-col items-center justify-center">
        <img className="object-contain  w-[50%]" src={"/hero.png"} alt="" />
        <h1 className="lg:text-4xl text-2xl font-semibold text-center lg:py-10">
          Weather <span className="text-blue-700 font-[800]">Cheaker</span> App
        </h1>
      </div>
      <div className="app w-full lg:w-[50%]">
        <div className="search-field h-[20%] flex items-center justify-center  lg:mx-0 lg:mr-10">
        <input
          className="w-[80%] rounded-s-md bg-transparent border border-blue-700 py-2 px-2"
          placeholder="Enter city"
          type="text"
          value={city}
          onChange={(e) => {
            setcity(e.target.value);
          }}
        />
        <FaSearch onClick={fetchData} className="text-2xl w-[20%] h-[42px] py-2 rounded-e-md bg-blue-700"/>
        </div>
      {
        data &&
        <ShowWeather current={data.current} location={data.location} />
      }
      </div>
    </div>
  );
};

export default App;
