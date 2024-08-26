import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Details/index.css";


const Card = () => {
  const navigate = useNavigate(); 
  
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          navigate(`/resultpage?lat=${latitude}&lon=${longitude}`);
        },
        error => console.error('Error getting location:', error)
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  const handleClick = async () => {
    const city = document.querySelector(".location-input input").value.trim();
    
    if (city) {
      try {
        
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=12ce1877ef0c500fcce4e85caa605396`);
        
        if (!response.ok) throw new Error('Invalid city name'); // Handle non-200 responses
        
        const data = await response.json();
        
        if (data.cod === '404') {
          throw new Error('City not found');
        }
        
        navigate(`/resultpage?city=${city}`);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Invalid city name. Please try again.'); 
      }
    } else {
      alert('Please enter a city name.'); 
    }
  };

  return (
    <div className="container">
      <h1 className='containerName'>“Discover Your Hometown Sky Secrets”</h1>
      <div className="location-input">
        <input type="text" placeholder="Where Are You?" />
        <button className="button" onClick={getLocation}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
          </svg>
        </button>
      </div>

      <div className="info">
        <span className="info-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
        </svg>
        </span>
        <span className="info-text">Click on the location Icon to Auto-Detect Your Weather</span>
      </div>
      <button className="button" onClick={handleClick}>
        <span className="button-content">Get The Forecast</span>
      </button>
    </div>
  );
}

export default Card;
