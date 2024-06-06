import React, { useEffect, useState } from "react";
import { MainWrapper } from "./styles.module";
import { AiOutlineSearch } from "react-icons/ai";
import { WiHumidity } from "react-icons/wi";
import { FaWind,FaHome } from "react-icons/fa";
import {
  BsFillSunFill,
  BsCloudyFill,
  BsFillCloudRainFill,
  BsCloudFog2Fill,
} from "react-icons/bs";
import { RiLoaderFill } from "react-icons/ri";
import { TiWeatherPartlySunny } from "react-icons/ti";
import axios from "axios";


interface weatherDataProps {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  sys: {
    country: string;
  };
  weather: {
    main: string;
  }[];
  wind: {
    speed: number;
  };
}

function DisplayWeather() {
  const api_key = "0cc86d16bf572f78cdc96c096c7627e5";
  const api_Endpoint = "https://api.openweathermap.org/data/2.5/";
  const [weatherData, setWeatherData] = useState<weatherDataProps | null>(null);
  const [isLoading,setIsLoading]=useState(false)
  const [searchCity,setSearchCity]=useState('')

  const fetchCurrentWeather = async (lat: number, lon: number) => {
    const url = `${api_Endpoint}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    return response.data;
  };
  const halndleRefresh=()=>{
    window.location.reload()
  }
 
  const fetchWeatherData=async (city:string)=>{
    try{
      const url=`${api_Endpoint}weather?q=${city}&appid=${api_key}&units=metric`;
      const searchResponse=await axios.get(url)
      const currentSearchResults:weatherDataProps=searchResponse.data
      return {currentSearchResults}

    }catch(err){
      console.error('Data is not found');
      throw err
    }
  }
  const handleSearch=async()=>{
    if(searchCity.trim()===''){
      return
    }
    try{
      const {currentSearchResults}=await fetchWeatherData(searchCity)
      setWeatherData(currentSearchResults)
    }catch(err){
      console.log('No results found');
      
    }
  } 
  const iconChanger = (weather: string) => {
    let iconElement: React.ReactNode;
    let iconColor: string;
    switch (weather) {
      case "Rain":
        iconElement = <BsFillCloudRainFill />;
        iconColor = "#2F4F4F";
        break;
      case "Clear":
        iconElement = <BsFillSunFill />;
        iconColor = "#FFC436";
        break;
      case "Clouds":
        iconElement = <BsCloudyFill />;
        iconColor = "#778899";
        break;
      case "Mist":
        iconElement = <BsCloudFog2Fill />;
        iconColor = "#A9A9A9";
        break;
      default:
        iconElement = <TiWeatherPartlySunny />;
        iconColor = "#7B2869";
    }
    return (
      <span className="icon" style={{color:iconColor}}>
        {iconElement}
      </span>
    )
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      Promise.all([fetchCurrentWeather(latitude, longitude)]).then(
        ([currentWeather]) => {
          setWeatherData(currentWeather);
          setIsLoading(true)
        }
      );
    });
  },[]);
  return (
    <MainWrapper>
      <div className="container">
      <h1 style={{ fontSize: "2.5rem", fontStyle: "italic" }}>Climate Detective</h1>
        <div className="searchArea">
          <FaHome className="home" onClick={halndleRefresh}/>
          <input type="text" placeholder="Enter a city" value={searchCity} onChange={(e)=>setSearchCity(e.target.value)} />
          <div className="searchCircle">
            <AiOutlineSearch className="searchIcon" onClick={handleSearch}/>
          </div>
        </div>
        {weatherData && isLoading ?(
          <>
            <div className="weatherArea">
              <h1>{weatherData.name}</h1>
              <span>{weatherData.sys.country}</span>
              <div className="icon">{iconChanger(weatherData.weather[0].main)}</div>
              <h1>{weatherData.main.temp}</h1>
              <h2>{weatherData.weather[0].main}</h2>
            </div>
            <div className="bottomInfoArea">
              <div className="humidityLevel">
                <WiHumidity className="windIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.main.humidity}%</h1>
                  <p></p>
                </div>
              </div>
              <div className="wind">
                <FaWind className="windIcon" />
                <div className="humidInfo">
                  <h1>{weatherData.wind.speed}km/hr</h1>
                  <p>Wind speed</p>
                </div>
              </div>
            </div>
          </>
        ):(
          <div className="loading">
            <RiLoaderFill className="loadingIcon"/>
            <p>Loading</p>
          </div>
        )}
      </div>
    </MainWrapper>
  );
}

export default DisplayWeather;
