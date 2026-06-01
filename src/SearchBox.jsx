import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({updateInfo}) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "c2826c49dc1ac5ad2d239ad0273c8125";
  let getWeatherInfor = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    let data = await response.json();
    let result = {
      temp : data.main.temp,
      tempMin : data.main.temp_min,
      tempMax : data.main.temp_max,
      humidity : data.main.humidity,
      feelsLike : data.main.feels_like,
      weather : data.weather[0].description,
      city : data.name,
      country : data.sys.country,
    }
    return result;
  }
  let [city, setCity] = useState("");
  let handleChange = (event) => {
    setCity(event.target.value);
  }
  let handleSubmit = async (event) =>{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo =await getWeatherInfor({updateInfo});
    updateInfo(newInfo);

  }
  return (
    <div className="search-box">
      <h3> Search for the weather!</h3>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City" variant="outlined" required value={city} onChange={handleChange} />
        <br></br><br></br>
         <Button variant="contained" type='submit'>Search</Button>
      </form>
    </div>
  );
}