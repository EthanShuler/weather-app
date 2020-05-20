import React, { Component } from "react";
import "../App.css";

export default class LocationInput extends Component {

  constructor(props) {
    super(props)

    this.state = {
      city: ''
    }
  }

  handleInputChage = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

    render() {
        return (
            <form onSubmit={this.props.submitCity} autoComplete="off">
                <input type="text" name="city" placeholder="enter city" value={this.state.city} onChange={this.handleInputChage}/>
                <button type="submit">Search</button>
            </form>
        );
    }
}