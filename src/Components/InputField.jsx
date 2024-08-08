import React from 'react';
import { FaSearch } from 'react-icons/fa';

const InputField = ({ value, onChange, fetchData }) => {
  return (
    <div className="search-field h-[25%] w-full flex items-center justify-center">
      <input
        className="w-[85%] h-[55%] outline-none rounded-s-md bg-transparent border-2 border-amber-600 px-3 py-2 text-sm"
        placeholder="Enter city"
        type="text"
        value={value}
        onChange={onChange}
      />
      <FaSearch onClick={fetchData} className="p-3 w-[15%] h-[55%] rounded-e-md text-white cursor-pointer bg-amber-600" />
    </div>
  );
};

export default InputField;
