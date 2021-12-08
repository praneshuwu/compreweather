import { useState } from 'react';

const WeatherDetails = (props) => {
  const { current, location } = props.weather;

  const [unit, setUnit] = useState('C');
  const [moreDetails, setMoreDetails] = useState(false);
  const co = current.air_quality.co;
  const no2 = current.air_quality.no2;
  const o3 = current.air_quality.o3;
  const so2 = current.air_quality.so2;
  const aqi = current.air_quality.pm2_5;
  let aqiColor = '';
  let aqiText = '';

  if (aqi <= 50) {
    aqiColor = 'bg-green-700 text-gray-50';
    aqiText = 'Good';
  } else if (aqi > 50 && aqi <= 100) {
    aqiColor = 'bg-yellow-300 text-black';
    aqiText = 'Moderate';
  } else if (aqi > 100 && aqi <= 150) {
    aqiColor = 'bg-yellow-600 text-gray-50';
    aqiText = 'Unhealthy for Sensitive Groups';
  } else if (aqi > 150) {
    aqiColor = 'bg-red-600 text-gray-50';
    aqiText = 'Unhealthy';
  }

  return (
    <>
      <div className='flex flex-col items-center '>
        <h3 className='text-center text-xl font-semibold uppercase mt-10'>
        {location.name}
        </h3>
        <h3 className='font-light text-7xl m-4'>
          {unit === 'C' ? current.temp_c : current.temp_f}
          <span
            className='text-4xl cursor-pointer'
            onClick={() => {
              unit === 'C' ? setUnit('F') : setUnit('C');
            }}
          >
            {' '}
            °{unit}
          </span>
        </h3>{' '}
        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className='h-20 w-20'
        />{' '}
        <p>{current.condition.text}</p>
      </div>

      {moreDetails && (
        <div className='mt-10 md:mx-auto w-56 md:w-72 max-w-80'>
          <ul className='list-none h-60 flex flex-col justify-evenly '>
            <li className='flex justify-between'>
              <span className='font-medium'> Feels Like:</span>
              {unit === 'C' ? current.feelslike_c : current.feelslike_f}
            </li>
            <li className='flex justify-between'>
              <span className='font-medium'>Rain:</span> {current.precip_mm} mm
              | {current.precip_in} in{' '}
            </li>
            <li className='flex justify-between'>
              <span className='font-medium'>Humidity:</span> {current.humidity}%
            </li>
            <li className='flex justify-between'>
              <span className='font-medium'>AQI:</span> {aqi.toFixed(2)}
            </li>
            <span
              className={`${aqiColor} rounded-md inline border-2 border-gray-700 text-center text-xs p-0.5`}
            >
              {aqiText}
            </span>

            <li className='flex justify-between'>
              <span className='font-medium'>Co:</span> {co.toFixed(2)}
            </li>
            <li className='flex justify-between'>
              <span className='font-medium'>No₂:</span> {no2.toFixed(2)}
            </li>
            <li className='flex justify-between'>
              <span className='font-medium'>O₃:</span> {o3.toFixed(2)}
            </li>
            <li className='flex justify-between'>
              <span className='font-medium'>So₂:</span> {so2.toFixed(2)}
            </li>
          </ul>
        </div>
      )}

      <p
        className='mt-6 uppercase underline font-extralight text-xs cursor-pointer'
        onClick={() => {
          setMoreDetails(!moreDetails);
        }}
      >
        {moreDetails ? 'hide details' : 'show more details'}
      </p>
    </>
  );
};

export default WeatherDetails;
