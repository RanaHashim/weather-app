
function WeatherCard({weather}){
const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    return(   
  <div className="mt-4 flex flex-col gap-3 items-start">
    <h2>City: {weather.name}</h2>

      <img src={iconUrl} alt={weather.weather[0].description} />
      <h1>🌡{weather.main.temp}</h1>
    <p>💧Humidity:{weather.main.humidity}</p>
    <p>🌬Wind Speed:{weather.wind.speed}</p>
    <p>🤗Feels Like:{weather.weather[0].description}</p>

  </div>
  
    );

}
export default WeatherCard;