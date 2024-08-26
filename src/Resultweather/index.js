import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "../Resultweather/index.css";

const Resultweather = () => {
  const apikey = "12ce1877ef0c500fcce4e85caa605396";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const latitude = queryParams.get('lat') ;
  const longitude = queryParams.get('lon');
  const cityFromQuery = queryParams.get('city');

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        let url = '';
        if (latitude && longitude) {
          url = `${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`;
        } else {
          url = `${apiUrl}?q=${cityFromQuery}&appid=${apikey}&units=metric`;
        }

        const response = await fetch(url);
        if (!response.ok) throw new Error('City not found or error fetching weather data'); 
        const data = await response.json();

        document.querySelector(".Temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city p").innerHTML = data.name;
        document.querySelector(".humidity h1").innerHTML = data.main.humidity + "%";
        document.querySelector(".windSpeed h1").innerHTML = data.wind.speed + "km/hr";
        const description=data.weather[0].description;
        document.querySelector(".description1").innerHTML = description;
        document.querySelector(".error").textContent = '';
      } catch (error) {
        console.error('Error fetching weather data:', error);
        document.querySelector(".error").textContent = 'Error fetching weather data';
      }
    };

    fetchWeather();
  }, [latitude, longitude, cityFromQuery]);


  return (
    <div className="result">
      <div className='description'>
        <div className='headingtext'><p style={{fontSize:"32px"}}>Welcome To</p> <br /><p style={{fontSize:"48px"}}> Avian Weather <br /> Forecast</p></div>
        <p className='description1'>Loading...</p>
      </div>
      <p className="error"></p>
      <div className='variables'>
        <div className='city'>
          <h1 className='Temp'>Loading...</h1>
          <p>Loading...</p>
        </div>
        <div className='humidity'>
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 30 30" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
        c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
        s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
        c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
        S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
        c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
        C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
        s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
        c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
        c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
        c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
        M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
        c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
        c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
        c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
        c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
        l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z
        "></path></svg>
          <h1>Loading...</h1>
          <p>Humidity</p>
        </div>
        <div className='windSpeed'>
        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
          <h1>Loading...</h1>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  );
}

export default Resultweather;
