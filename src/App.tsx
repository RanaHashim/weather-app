import { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import {fetchWeather} from "./services/weatherApi";

function App() {
  const [city,setCity]=useState("");
  const [weather,setWeather]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");

  const getWeather=async ()=>{
     setError("");
     console.log("Getting Weather for city:",city);
     try{
     setLoading(true);
     const data=await fetchWeather(city.trim());
      if(data.cod!==200){
    setError(data.message);
    setWeather(null);
    return;
  }
     setWeather(data);
    
     
     console.log(weather);
     }
     catch(error){
      console.log(error);
     }
     finally{
      setLoading(false);
     }
  }
  const handleCityChange=(e)=>{
    setCity(e.target.value);
  }
return(
  <div>
  <h1>Weather App</h1>
  <p>Get Real Time Weather Information for any city</p>
  <div className="bg-blue-500 text-white p-4">
  Hello
</div>
  
  <SearchBar  city={city} handleCityChange={handleCityChange} getWeather={getWeather}/>
  {loading && <Loading/>}
  {error && <ErrorMessage error={error}/>}
  {weather && <WeatherCard weather={weather}/>}

  </div>
);
}
export default App;