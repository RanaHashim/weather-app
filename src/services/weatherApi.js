
const API_KEY='ca10f90c77d1a7da8f2b6d7197b7c133';
export async function fetchWeather(city){
     const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
     const response=await fetch(url);
     const data=await response.json();
     return data;
}