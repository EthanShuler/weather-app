import React, { Component } from "react";
import "../App.css";

export default class CurrentWeather extends Component
{
    render()
    {
        return (
            <div className="container border">
                <h2>Current Weather for <b>{this.props.city}</b></h2>

                <div className="row">
                    <div className="col-sm">
                        {this.props.temp} <span>&#176;</span> F
                            </div>
                    <div className="col-sm">
                        {this.props.main}
                    </div>
                    <div className="col-sm">
                        <img
                            src={
                                "http://openweathermap.org/img/wn/" +
                                this.props.icon +
                                "@2x.png"
                            }
                        />
                    </div>
                </div>

            </div>
        );
    }
}
