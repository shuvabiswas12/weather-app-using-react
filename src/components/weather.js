import React, {useEffect, useState} from "react";
import axios from "axios";
import formatAMPM from "../utilities/TimeFormatter";
import SearchForm from "./SearchForm";
import iconUrl from "../utilities/IconUrl.js";

export default function Weather() {
    const [country, setCountry] = useState("Bangladesh")
    const [weatherData, setWeatherData] = useState({})
    console.log(weatherData)

    function handleSearchForm(e) {
        e.preventDefault()
        getWeatherData()
    }

    function inputOnChange(e) {
        setCountry(() => e.target.value)
    }

    useEffect(() => {
        getWeatherData()
        setCountry("")
    }, [])

    function getWeatherData() {
       if (country) {
           axios.get(`weather?q=${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
               .then((response) => {
                   setWeatherData(() => response.data)
                   setCountry("")
               })
               .catch((err) => {
                   alert("Can not find location.")
                   console.log(err)
               })
       }
    }

    function temperatureFromKelvin(temperature) {
        return Math.ceil(temperature - 273.15)
    }


    return (
        <>
            {JSON.stringify(weatherData) !== '{}' &&
            <main className="main-container">

                <SearchForm inputOnChange={inputOnChange} handleSearchForm={handleSearchForm} country={country}/>

                <div className="location-and-date">
                    <h1 className="location-and-date__location">{weatherData.name}</h1>
                    <div>{new Date(Date.now()).toDateString()}</div>
                </div>


                <div className="current-temperature">
                    <div className="current-temperature__icon-container">
                        <img srcSet={iconUrl + weatherData.weather[0].icon + '@2x.png'}
                             className="current-temperature__icon" alt=""/>
                    </div>
                    <div className="current-temperature__content-container">
                        <div
                            className="current-temperature__value">{temperatureFromKelvin(weatherData.main.temp)}&deg;</div>
                        <div className="current-temperature__summary">{weatherData.weather[0].main}</div>
                        <div>
                            <p>Feels like {temperatureFromKelvin(weatherData.main.feels_like)}&deg;</p>
                        </div>
                    </div>
                </div>
                <div className="current-stats">
                    <div>
                        <div className="current-stats__value">{Math.ceil(temperatureFromKelvin(weatherData.main.temp_max))}&deg;</div>
                        <div className="current-stats__label">Max Temperature</div>
                        <div className="current-stats__value">{Math.ceil(temperatureFromKelvin(weatherData.main.temp_min))}&deg;</div>
                        <div className="current-stats__label">Min Temperature</div>
                    </div>
                    <div>
                        <div className="current-stats__value">{weatherData.wind.speed}m/s</div>
                        <div className="current-stats__label">Wind</div>
                        <div className="current-stats__value">{weatherData.main.humidity}</div>
                        <div className="current-stats__label">Humidity</div>
                    </div>
                    <div>
                        <div className="current-stats__value">{formatAMPM(new Date(weatherData.sys.sunrise))}</div>
                        <div className="current-stats__label">Sunrise</div>
                        <div className="current-stats__value">{formatAMPM(new Date(weatherData.sys.sunset))}</div>
                        <div className="current-stats__label">Sunset</div>
                    </div>
                </div>

            </main>
            }
        </>
    )
}
