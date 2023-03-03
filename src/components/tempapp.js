import React, {useEffect, useState} from "react";
import "./css/style.css";
const Tempapp = ( ) => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("mumbai");

    useEffect( () => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9eb4dc4c882523643bc6f620b7f114a3`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }
        fetchApi( );

    },[search])
    return(
        <>
        
        <div className="box">
            <div className="inputdata">
                <input
                type="search"
                value={search}
                className="inputfield"
                onChange= { (event) =>{setSearch(event.target.value)
                }} />
            </div>
        {!city ? (
            <p className="errorMsg"> city not found</p>
        ) : (
            
             <div className="info">

              <h2 className="location">
              <i className="fa-solid fa-street-view"></i> {search}
              </h2>
              <h1 className="temp">
                {city.temp}°C

              </h1>
              <h5 className="tempmin_max"> max : {city.temp_max}°C | min : {city.temp_min}°C

              </h5>
             </div>
            )}
        
        </div>
        </>
    )
}
export default Tempapp;
//9eb4dc4c882523643bc6f620b7f114a3
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=9eb4dc4c882523643bc6f620b7f114a3