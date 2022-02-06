import React, {useEffect, useState} from "react";
import axios from "axios";
import SearchForm from "./SearchForm";
import CurrentWeather from "./CurrentWeather";
import TodaysWeather from "./TodaysWeather";
import API_KEY from "../utilities/apiKey";

export default function Weather() {
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
                <TodaysWeather locationData={locationData}/>
            </main>
            }
        </>
    )
}
