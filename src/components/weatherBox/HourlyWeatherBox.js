import iconUrl from "../../utilities/iconUrl";
import getTemperature from "../../utilities/temperatureFormatter";

export default function HourlyWeatherBox({weatherItem}) {
    return (
        <div className="weather-by-hour__item">
            <div className="weather-by-hour__hour">{ new Date(weatherItem.dt * 1000).toLocaleTimeString([],{hour: '2-digit'})}</div>
            <img srcSet={iconUrl + weatherItem.weather[0].icon + ".png"} alt={weatherItem.weather[0].main}/>
            <div>{getTemperature(weatherItem.temp)}&deg;</div>
        </div>
    )
}