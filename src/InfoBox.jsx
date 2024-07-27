import * as React from 'react';
import "./infoBox.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export default function InfoBox(){
    const INIT_URL=
    "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGR1c3R5JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"

    let info = {
        city: "Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:47,
        humidity:47,
        weather: "haze",
    };

   return(
    <div className="infoBox">
         <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
     <CardMedia
       sx={{ height: 140 }}
       image={INIT_URL}
       title="green iguana"
     />
     <CardContent>
       <Typography gutterBottom variant="h5" component="div">
         {info.city}
       </Typography>
       <Typography variant="body2" color="text.secondary">
        <p>Temperature ={info.temp}&deg;C</p>
        <p>Humidity ={info.humidity}</p>
        <p>Min Temp ={info.temp}&deg;C</p>
        <p>Max Temp ={info.temp}&deg;C</p>
        <p>
            The weather can be described as <i>{info.weather}</i> feels like {info.feelslike}&deg;C
        </p>

       </Typography>
     </CardContent>
    
     </Card>
      </div>
    </div>
    
   ) 
}