import React from 'react';
import Card from '../Details';
import "../Weather/index.css";


const Weather = () => {
  return (
    <div class="root">
        <div><h1 className="h1">Welcome To <span className="free">Avian </span><span className="weather">Weather</span></h1>
        </div>
        <div><Card /></div>
    </div>
  )
}

export default Weather;