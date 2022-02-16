import React, {useEffect, useState} from "react";
import axios from "axios";
import SearchForm from "./searchForm/SearchForm";
import CurrentWeather from "./CurrentWeather";
import AllDaysLongWeather from "./AllDaysLongWeather";
import API_KEY from "../utilities/apiKey";
import CopyRight from "./copyRight/CopyRight";

export default function WeatherHome() {
    const [country, setCountry] = useState("Bangladesh")
    const [weatherData, setWeatherData] = useState({})
    const [locationData, setLocationData] = useState({})

    useEffect(() => {
        getWeatherData()
        setCountry("")
    }, [weatherData])

    function getWeatherData() {
        if (country) {
            axios.get(`weather?q=${country}&appid=${API_KEY}`)
                .then((response) => {
                    setWeatherData(() => response.data)
                    setLocationData(() => response.data.coord)
                    setCountry("")
                })
                .catch((err) => {
                    alert("Can not find location.")
                    console.log(err)
                })
        }
    }

    return (
        <>
            {JSON.stringify(weatherData) !== '{}' &&
            <main className="main-container">
                <SearchForm setCountry={setCountry} country={country} getWeatherData={getWeatherData}/>
                <CurrentWeather weatherData={weatherData}/>
                <AllDaysLongWeather locationData={locationData}/>
                <CopyRight />
            </main>
            }
        </>
    )
}
