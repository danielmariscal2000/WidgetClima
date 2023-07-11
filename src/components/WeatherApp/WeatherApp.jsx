import React from 'react'
import WatherForm from '../WeatherForm/WatherForm';
import axios from 'axios';
import WeatherMain from '../WeatherMain/WeatherMain';
import style from "./wheatherapp.module.css"
function WeatherApp() {
  const [weather,setWeather]=React.useState(null);

  React.useEffect(()=>{
     loadInfo()
  },[]);
  React.useEffect(()=>{
    document.title=`Weather | ${weather?.location.name ?? ""}`;
 },[weather]);
  function handleChangeCity(city){
     setWeather(null);
     loadInfo(city);
  }
  async function loadInfo(city="london"){

    try {
        const request=await axios.get(`http://api.weatherapi.com/v1/current.json?aqi=no&key=c961b387f2ce46f7b74141347231107&q=${city}`)
        const data=request.data;
        setWeather(data);
    } catch (error) {
        
    }
  }
  return (
    <div className={style.weatherContainer}>
      <div className={style.container}>
        <WatherForm onChangeCity={handleChangeCity}></WatherForm>
        <WeatherMain weather={weather}></WeatherMain>
      </div>
    </div>
  )
}

export default WeatherApp