function WeatherCard({ weather }) {
  const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  const sunrise=new Date(weather.sys.sunrise*1000);
  const sunriseTime = sunrise.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
});
  const sunset=new Date(weather.sys.sunset*1000);
  const sunsetTime=sunset.toLocaleTimeString([],{
    hour:"2-digit",
    minute: "2-digit",
  });
  const weatherDate=new Date(weather.dt*1000);
  const formattedDate=weatherDate.toLocaleTimeString([],{
    day:"numeric",
    month:"numeric",
    year:"numeric",
  }

  )
  return (
    <div className="max-w-lg mx-auto mt-6 bg-white rounded-2xl shadow-lg border border-gray-200 p-6">

      <h2 className="text-2xl font-bold text-center mb-7">
        📍 {weather.name}
      </h2>
      <p>{formattedDate}</p>
      <div className="flex items-center justify-between gap-8">

        {/* Left Section */}
        <div className="flex flex-col items-center border-r border-gray-300 pr-8">
          <img src={iconUrl} alt={weather.weather[0].description} />

          <h1 className="text-5xl font-bold">
            {Math.round(weather.main.temp)}°C
          </h1>

          <p className="capitalize text-gray-500">
            {weather.weather[0].description}
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 space-y-4">

          <div className="flex justify-between">
            <span>💧 Humidity</span>
            <span>{weather.main.humidity}%</span>
          </div>

          <div className="flex justify-between">
            <span>🌬 Wind Speed</span>
            <span>{weather.wind.speed} m/s</span>
          </div>

          <div className="flex justify-between">
            <span>🌡 Feels Like</span>
            <span>{Math.round(weather.main.feels_like)}°C</span>
          </div>
        </div>

      </div>
      <div className="flex items-center justify-between py-5">

        <span>🌅
         <p>Sunrise:</p> 
         <p> {sunriseTime}</p> 
        </span>

        <span>🌇
          <p>Sunset</p>
          <p>{sunsetTime}</p>
        </span>
        <span>
        📊
        <p>Pressure</p>
        <p>{weather.main.pressure} hPa</p>
        </span>
        <span>
          👁
          <p>Visibility</p>
          <p>{weather.visibility/1000} KM</p>
        </span>
      </div>
    </div>
  );
}

export default WeatherCard;