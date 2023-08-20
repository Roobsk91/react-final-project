import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
    return (
        <div className="DailyForecast">
            <div className="row">
                <div className="col">
                   <div className="DailyForecast-day">Thu</div> 
                    <WeatherIcon code="broken-clouds-day" size={36}/>
                   <div className="DailyForecast-temp">
                    <span className="DailyForecast-max">19ºC</span> 
                    <span className="DailyForecast-min">10ºC</span>
                    </div> 
                </div>
            </div>
        </div>
    )
}