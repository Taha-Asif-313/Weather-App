import { FaSearch } from "react-icons/fa";
import React, { useState } from "react";
import ShowWeather from "./Components/ShowWeather";
import useFetch from "./Hooks/useFetch";
import Loading from "./Components/Loading";
import Content from "./Components/Content";
import InputField from "./Components/InputField";

const App = () => {

  // States
  const [city, setcity] = useState("");

  // Onchange function
  const handleChange = (e) => {
    setcity(e.target.value);
  };

  // Use usefetch custom hook
  const { data, loading, error, fetchData } = useFetch(
    `http://api.weatherapi.com/v1/current.json?key=0b9d2407a7a44eeaa2c134317243006&q=${city}`
  );
 
  // if loading is true
  if (loading) {
    return <Loading />;
  }

  // if error ocusers 
  if (error) {
    return <div className="flex justify-center items-center">{error}</div>;
  }

  return (
    <div className="h-screen w-full py-6 bg-black text-white flex lg:flex-row flex-col lg:gap-5 items-center px-5 lg:px-24">
      <Content />
      <div className="app w-full h-[60%] flex flex-col justify-start items-center lg:w-[50%]">
        <InputField
          value={city}
          onChange={handleChange}
          fetchData={fetchData}
        />
        {data && (
          <ShowWeather current={data.current} location={data.location} />
        )}
      </div>
    </div>
  );
};

export default App;
