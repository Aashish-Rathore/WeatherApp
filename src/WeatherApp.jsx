import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp(){
    const[weatherInfo , setWheather] = useState({
        
        city: "Wonderland",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:47,
        humidity:47,
        weather: "haze",
    });
    return(
        <div style={{textAlign:"center"}}>
           <h2>Weather App by Delta</h2> 
           <SearchBox/>
           <InfoBox info={weatherInfo}/>
        </div>
    )
}