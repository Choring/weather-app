import React from 'react'

const WeatherBox = ({weather}) => {
    return (
        <div className="weather-box">
            <div>{weather?.name}</div>
            <h2>{weather?.main.temp.toFixed(1)}℃ / {(weather?.main.temp*18+32).toFixed(1)}℉</h2>
            <h3>{weather?.weather[0].description}</h3>
        </div>
    )
}

export default WeatherBox