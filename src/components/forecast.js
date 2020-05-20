import React, { Component } from "react";
import { openweathermap } from "../config/openweathermap";
import "../App.css";

export default class Forecast extends Component {

    state = {
        loading: true,
        weather: null,
    };

    async componentDidMount() {
        const url =
            openweathermap.base_url +
            "forecast?q=" +
            this.props.city +
            "&units=imperial&appid=" +
            openweathermap.api_token;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ weather: data, loading: false });
    }

    render() {
        return (
            <div>Hello</div>
        );
    }
}