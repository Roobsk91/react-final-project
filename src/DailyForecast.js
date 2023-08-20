import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
    setLoaded(false);
    }, [props.query]);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}   
    if (loaded) {
        return (
        <div className="DailyForecast">
            <div className="row">
                {forecast.map(function (weekForecast, index) {
                    if (index < 5) {
                    return (
                        <div className="col" key={index}>
                <WeatherForecastDay data={weekForecast} />
                </div>
                    );
                    }
                })}
            </div>
        </div>
    );
    } else {
    let apiKey = "343956b42t678f23abfoa30906bf4370";
    let city = props.query;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
    }
}