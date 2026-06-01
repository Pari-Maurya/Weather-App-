import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({info}) {
  let INIT_URL = "https://images.unsplash.com/photo-1590372648787-fa5a935c2c40?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL = "https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?q=80&w=697&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1516116216624-53e697fedbe2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAINY_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="info-box">
      <h3>Weather Information</h3>
      <div className= "mainBox">
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp > 30 ? HOT_URL : info.temp < 20 ? COLD_URL : RAINY_URL}
        title="Weather Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}, {info.country}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>
            Temperature: {info.temp}°C<br />
            Feels Like: {info.feelsLike}°C<br />
            Humidity: {info.humidity}%<br />
            Weather: {info.weather}<br />
            Min Temp: {info.tempMin}°C<br />
            Max Temp: {info.tempMax}°C<br />
            The weather can be descibed as <i>{info.weather}</i> and feels like {info.feelsLike}°C.
          </div>
          
        </Typography>
      </CardContent>
      
    </Card>
      </div>
      
    </div>
  );
}