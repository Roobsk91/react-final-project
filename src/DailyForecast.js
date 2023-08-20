import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
function handleResponse(response) {

}

    let apiKey = "343956b42t678f23abfoa30906bf4370";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
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