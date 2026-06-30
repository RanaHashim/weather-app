function SearchBar({
    city,handleCityChange,getWeather
}

){
return (
<form className="my-5" onSubmit={(e)=>{
    e.preventDefault();
    getWeather();
  }}>
    <input type="text" placeholder="Enter City Name" value={city} onChange={handleCityChange} />
    <button className="bg-purple-800 text-white rounded p-1 mx-3" disabled={!city.trim()} type="submit">Get Weather</button>
    
  </form>
);
}
export default SearchBar;
