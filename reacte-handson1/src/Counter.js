// Class-Oriented Components

import React from "react"

// State is predefined by React.Component
// Must be named 'state'
export default class Counter extends React.Component {
    state = {
        "number":0
    }
    render() {
        return (
            <React.Fragment>
            <div id="counter">
                {this.state.number}
            </div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
            </React.Fragment>
        )
    }

    // Needs to be an arrow function for classes
    increment = () => {
        this.setState({
            'number':this.state.number + 1
        })
    }

    decrement = () => {
        this.setState({
            'number':this.state.number - 1
        })
    }
}

// render() function is a requirement defined by React
