import axios from 'axios';
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const useFetch = (url) => {
    
// States
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

// Function to fetch data from api
    const fetchData = async () => {
      try {
        setloading(true);
        await axios.get(url).then((res) => {
          setdata(res.data);
          console.log(res)
          setloading(false);
        });
      } catch (error) {
        seterror(error.message)
        console.log(error)
        setloading(false)
      }
    };


  return {data,loading,error,fetchData}
}

export default useFetch