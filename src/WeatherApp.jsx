import {useState} from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './WeatherApp.css';
export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Tokyo",
    country: "JP",
    feelsLike: 26.63,
    humidity: 62,
    temp: 26.63,
    tempMax: 27.59,
    tempMin: 25.79,
    weather: "broken clouds"
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }
  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <SearchBox updateInfo = {updateInfo} />
      <br />
      <InfoBox info = {weatherInfo} />
    </div>
  );
}