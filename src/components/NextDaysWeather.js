import DailyWeatherBox from "./weatherBox/DailyWeatherBox";

export default function NextDaysWeather({dailyWeather}) {
    return (
        <>
            <div className="next-5-days">
                <h2 className="next-5-days__heading">Next {Object.keys(dailyWeather).length} days</h2>
                <div className="next-5-days__container">

                    {
                        dailyWeather.map((weather) => <DailyWeatherBox weather={weather} key={weather.dt}/>)
                    }


                </div>
            </div>
        </>
    )
}