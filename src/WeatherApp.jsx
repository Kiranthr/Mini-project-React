import {useState} from "react";
import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
      city:"Delhi",
        Humidity: 57,
        Weather: "overcast clouds",
          feelslike: 38.66,
          temp: 33.08,
         tempMax: 33.08,
         tempMin: 33.08,
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
            <h2>Weather App</h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}