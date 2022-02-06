import React, {useEffect, useState} from "react";
import axios from "axios";
import API_KEY from "../utilities/apiKey";
import getTemperature from "../utilities/TemperatureFormatter";
import iconUrl from "../utilities/IconUrl";

export default function TodaysWeather({locationData}) {
    const [hourlyWeather, setHourlyWeather] = useState({});
    const [dailyWeather, setDailyWeather] = useState({});
    const [dataIsSet, setDataIsSet] = useState(false);

    useEffect(() => {
        if (Object.keys(locationData).length > 0) {
            axios.get(`onecall?lat=${locationData.lat}&lon=${locationData.lon}&exclude=minutely&appid=${API_KEY}`)
                .then((response) => {
                    setHourlyWeather(() => response.data.hourly)
                    setDataIsSet(() => true)
                    console.log(hourlyWeather)
                })
                .catch((err) => {
                    alert("Today's weather has some problem when fetching data!")
                    console.log(err)
                })
        }
    }, [dataIsSet, locationData])

    return (
        <>
            {JSON.stringify(hourlyWeather) !== "{}" &&
                <div className="weather-by-hour">
                <h2 className="weather-by-hour__heading">Today's weather</h2>
                <div className="weather-by-hour__container">

                    {
                        hourlyWeather.map((weatherItem)=> {
                            return (
                                <div className="weather-by-hour__item" key={weatherItem.dt}>
                                    <div className="weather-by-hour__hour">{ new Date(weatherItem.dt * 1000).toLocaleTimeString([],{hour: '2-digit'})}</div>
                                    <img srcSet={iconUrl + weatherItem.weather[0].icon + ".png"} alt={weatherItem.weather[0].main}/>
                                    <div>{getTemperature(weatherItem.temp)}&deg;</div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            }
        </>
    )
}