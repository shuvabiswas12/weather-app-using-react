import React, {useEffect} from "react"
import axios from "axios"
import WeatherHome from "./components/weatherHome"

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/"

// alert(process.env.REACT_APP_WEATHER_API_KEY)

function App() {
  return (
    <div className="App">
      <WeatherHome />
    </div>
  );
}

export default App;
