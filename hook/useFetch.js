// import { useState,useEffect } from "react";
// import axios from "axios";
// import {RAPID_API_KEY} from '@env';

// const rapidApiKey = RAPID_API_KEY;


// const useEffect = (endpoint,query) =>{
//     const[data,setData] = useState([]);
//     const [isLoading,setIsLoading] = useState(false);
//     const[error,setError] = useState(null);


// const options = {
//   method: 'GET',
//   url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
//   headers: {
//     'X-RapidAPI-Key': apidApiKey,
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//   },
//   params: {...query},
// };

// }


import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key":RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to fetch data");
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;


