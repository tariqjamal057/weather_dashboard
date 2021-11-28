import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [Latitude, setLatitude] = useState();
  const [Longitude, setLongitude] = useState();
  const [weatherData, setweatherData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });

      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${Latitude}&lon=${Longitude}&appid=0063c6675c0c9b1b8b7bcc19a8c4e385`
      )
        .then((response) => response.json())
        .then((data) => {
          setweatherData(data);
        });
      console.log(weatherData);
    };
    fetchData();
  }, [Latitude, Longitude]);

  


  return (
    <div>
      <h2 className="title">WEATHER APPLICATION</h2>
      {/* <div onClick={() => fetchData()}>GetWeatherData</div> */}
      <div className="wrap">
        <div className="Container">
          <h1>City Name : {weatherData.name} </h1>
          <h4>Latitude : {Latitude}</h4>
          <h4>Longitude : {Longitude}</h4>
          <h2 style={{textTransform: 'capitalize'}} >Description : {weatherData.weather[0].description}</h2>
          <h3>
            Temparature : {Math.floor(weatherData.main.temp - 273.15)} &deg;C
          </h3>
          <h3>
            Min-Temp : {Math.floor(weatherData.main.temp_min - 273.15)} &deg;C
          </h3>
          <h3>
            Max-Temp :{Math.floor(weatherData.main.temp_max - 273.15)} &deg;C
          </h3>
          <h3>
            Feels-Like : {Math.floor(weatherData.main.feels_like - 273.15)} &deg;C
          </h3>
          <h3>Humidity : {weatherData.main.humidity} %</h3>
          <h3>Pressure : {weatherData.main.pressure} mb</h3>
          <h3>Wind speed : {weatherData.wind.speed} km/h</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
