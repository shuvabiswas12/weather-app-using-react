import {getDatesInShort, getNameOfDays} from "../../utilities/timeFormatter";
import getTemperature from "../../utilities/temperatureFormatter";
import iconUrl from "../../utilities/iconUrl";
import getWindInMPH from "../../utilities/windHandler";

export default function DailyWeatherBox({weather}) {
    return (
        <div className="next-5-days__row">
            <div className="next-5-days__date">
                {getNameOfDays(weather.dt)}
                <div className="next-5-days__label">{getDatesInShort(weather.dt)}</div>
            </div>

            <div className="next-5-days__low">
                {getTemperature(weather.temp.min)}&deg;
                <div className="next-5-days__label">Low</div>
            </div>

            <div className="next-5-days__high">
                {getTemperature(weather.temp.max)}&deg;
                <div className="next-5-days__label">High</div>
            </div>

            <div className="next-5-days__icon">
                <img srcSet={iconUrl + weather.weather[0].icon + ".png"} alt={weather.weather[0].main}/>
            </div>

            <div className="next-5-days__rain">
                {weather.humidity}%
                <div className="next-5-days__label">Humidity</div>
            </div>

            <div className="next-5-days__wind">
                {getWindInMPH(weather.wind_speed)}mph
                <div className="next-5-days__label">Wind</div>
            </div>
        </div>
    )
}