import React, { Component } from "react";
import CurrentWeather from "./components/currentWeather";
import LocationInput from "./components/locationInput";
import Forecast from "./components/forecast"
import { openweathermap } from "./config/openweathermap";

export default class App extends Component {
    state = {
        weather: null,
        city: null,
        error: false
    };

    retrieveWeather = async (event) => {
        event.preventDefault();

        const city = event.target.elements.city.value;

        const url =
            openweathermap.base_url +
            "weather?q=" + city + "&units=imperial&appid=" +
            openweathermap.api_token;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            this.setState({ weather: data, loading: false, error: false });
        }
        else {
            this.setState({error: true});
        }
        
    }

    render() {
        return (
            <div className="App">
                <h1>React Weather App</h1>
                <LocationInput submitCity={this.retrieveWeather}></LocationInput>
                {this.state.error ? (
                    <div>
                        <h1>City was not found, try again</h1>
                    </div>
                ) : (
                    !this.state.weather ? (
                        <div>
                            <div>Enter a City to check the weather</div>
                        </div>
                        
                    ) : (
                        <div className="pt-5">
                            <CurrentWeather city={this.state.weather.name} temp={this.state.weather.main.temp} main={this.state.weather.weather[0].main} icon={this.state.weather.weather[0].icon}/>
                        {/* <Forecast city="Milwaukee"></Forecast> */}
                        </div>
                        
                    )
                )}
                
                </div>
        );
    }
}
