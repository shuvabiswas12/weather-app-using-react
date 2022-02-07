import React, {useEffect, useState} from "react";
import axios from "axios";
import API_KEY from "../utilities/apiKey";
import getTemperature from "../utilities/temperatureFormatter";
import iconUrl from "../utilities/iconUrl";
import HourlyWeatherBox from "./weatherBox/HourlyWeatherBox";
import NextDaysWeather from "./NextDaysWeather";

export default function AllDaysLongWeather({locationData}) {
    const [hourlyWeather, setHourlyWeather] = useState({});
    const [dailyWeather, setDailyWeather] = useState({});
    const [dataIsSet, setDataIsSet] = useState(false);

    useEffect(() => {
        if (Object.keys(locationData).length > 0) {
            axios.get(`onecall?lat=${locationData.lat}&lon=${locationData.lon}&exclude=minutely&appid=${API_KEY}`)
                .then((response) => {
                    setHourlyWeather(() => response.data.hourly)
                    setDailyWeather(() => response.data.daily)
                    setDataIsSet(() => true)
                })
                .catch((err) => {
                    alert("All day's long weather file has some problem when fetching data!")
                    console.log(err)
                })
        }
    }, [dataIsSet, locationData])

    return (
        <>
            {JSON.stringify(hourlyWeather) !== "{}" &&
            <>
                <div className="weather-by-hour">
                    <h2 className="weather-by-hour__heading">Today's weather</h2>
                    <div className="weather-by-hour__container">

                        {
                            hourlyWeather.map((weatherItem) => {
                                return (
                                    <HourlyWeatherBox weatherItem={weatherItem} key={weatherItem.dt}/>
                                )
                            })
                        }

                    </div>
                </div>
                {
                    JSON.stringify(dailyWeather) !== "{}" &&
                    <NextDaysWeather dailyWeather={dailyWeather}/>
                }
            </>
            }
        </>
    )
}