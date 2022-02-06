import iconUrl from "../utilities/IconUrl";
import getTemperature from "../utilities/TemperatureFormatter";
import {getFormattedTime} from "../utilities/TimeFormatter.js";

export default function CurrentWeather({weatherData}) {
    return (
        <>
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
                        className="current-temperature__value">{getTemperature(weatherData.main.temp)}&deg;</div>
                    <div className="current-temperature__summary">{weatherData.weather[0].main}</div>
                    <div>
                        <p>Feels like {getTemperature(weatherData.main.feels_like)}&deg;</p>
                    </div>
                </div>
            </div>
            <div className="current-stats">
                <div>
                    <div className="current-stats__value">{getTemperature(weatherData.main.temp_max)}&deg;</div>
                    <div className="current-stats__label">Max Temperature</div>
                    <div className="current-stats__value">{getTemperature(weatherData.main.temp_min)}&deg;</div>
                    <div className="current-stats__label">Min Temperature</div>
                </div>
                <div>
                    <div className="current-stats__value">{weatherData.wind.speed}m/s</div>
                    <div className="current-stats__label">Wind</div>
                    <div className="current-stats__value">{weatherData.main.humidity}</div>
                    <div className="current-stats__label">Humidity</div>
                </div>
                <div>
                    <div className="current-stats__value">{getFormattedTime(weatherData.sys.sunrise)}</div>
                    <div className="current-stats__label">Sunrise</div>
                    <div className="current-stats__value">{getFormattedTime(weatherData.sys.sunset)}</div>
                    <div className="current-stats__label">Sunset</div>
                </div>
            </div>
        </>
    )
}