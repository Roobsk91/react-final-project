import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
function maxTemp() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}º`;
}
function minTemp() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}º`;
}

function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
}

return (
    <div className="WeatherForecastDay">
<div className="DailyForecast">
            <div className="row">
                <div className="col">
                   <div className="DailyForecast-day">{day()}</div> 
                    <WeatherIcon code={props.data.condition.icon} size={36}/>
                   <div className="DailyForecast-temp">
                    <span className="DailyForecast-max">{maxTemp()}</span> 
                    <span className="DailyForecast-min">{minTemp()}</span>
                    </div> 
                </div>
            </div>
        </div>
    </div>
)
}