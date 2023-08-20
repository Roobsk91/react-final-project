import React, { useState } from "react";
import "./DailyForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}   
    if (loaded) {
        return (
        <WeatherForecastDay data={forecast[0]} />
    );
    } else {
    let apiKey = "343956b42t678f23abfoa30906bf4370";
    let city = props.query;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
    }
}