import axios from 'axios';
import {useState } from 'react';
import Navbar from '../components/Navbar';
import WeatherDetails from '../components/WeatherDetails';




const Home = () => {
  

  const [weather, setWeather] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);


  const fetchWeather = async (searchQuery) => {
    const res = await axios.get(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchQuery}&aqi=yes`
    );

    setWeather(res.data);

    console.log(weather);
  };


  return (
    <>
      <Navbar />
      <div className='flex flex-col items-center'>
        <div className='flex-1 w-3/4 rounded-2xl shadow-lg flex flex-col p-6 mt-4'>
          <label className='text-lg mb-4'>Search for a location</label>
          <input
            type='text'
            className='rounded-md border-2 border-gray-400 h-10 mb-4 p-4'
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              fetchWeather(searchQuery);
            }}
            className='bg-gray-500 text-white rounded-md hover:shadow-md px-6 py-2 text-center'
          >
            Search
          </button>
        
          
          {weather && <WeatherDetails weather={weather} />}
        </div>
      </div>
    </>
  );
};

export default Home;
