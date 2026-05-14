import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    let img_URL="https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2xvdWRzfGVufDB8fDB8fHww";
    let Hot_URL="https://images.unsplash.com/photo-1565677913671-ce5a5c0ae655?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let Cold_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let Rain_URl="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return (
    <div className="InfoBox">
       <h2>Weather Info--{info.Weather}</h2>
       <div className="CardContainer">
       <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.Humdity>80 ? Rain_URl:info.temp>20 ? Hot_URL:Cold_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.Humdity>80 ?<ThunderstormIcon/> :info.temp>20 ? < SunnyIcon/> :<AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
            <p>Temparature:{info.temp}&deg;C</p>
            <p>Humidity:{info.Humidity}</p>
            <p>Min temp:{info.tempMin}&deg;C</p>
            <p>Max temp:{info.tempMax}&deg;C</p>
            <p>Temparature:{info.temp}&deg;C</p>
            <p>The Weather described as {info.Weather} and it feels like {info.feelslike}&deg;C </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    );
}