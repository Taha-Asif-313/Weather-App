import React from 'react';
import { FaSearch } from 'react-icons/fa';

const InputField = ({ value, onChange, fetchData }) => {
  return (
    <div className="search-field h-[20%] w-full flex items-center justify-center">
      <input
        className="w-[80%] h-[55%] outline-none rounded-s-md bg-transparent border-2 border-amber-600 px-3 py-2 text-sm"
        placeholder="Enter city"
        type="text"
        value={value}
        onChange={onChange}
      />
      <FaSearch onClick={fetchData} className="text-2xl w-[20%] h-[55%] py-2 rounded-e-md text-white cursor-pointer bg-amber-600" />
    </div>
  );
};

export default InputField;
