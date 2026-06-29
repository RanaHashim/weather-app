function SearchBar({
    city,handleCityChange,getWeather
}

){
return (
<form onSubmit={(e)=>{
    e.preventDefault();
    getWeather();
  }}>
    <input type="text" placeholder="Enter City Name" value={city} onChange={handleCityChange} />
    <button disabled={!city.trim()} type="submit">Get Weather</button>
    
  </form>
);
}
export default SearchBar;
