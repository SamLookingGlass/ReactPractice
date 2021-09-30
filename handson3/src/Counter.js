// Class-Oriented Components

import React from "react"

// State is predefined by React.Component
// Must be named 'state'
export default class Counter extends React.Component {
    state = {
        "number": this.props.startingNumber
    }
    render() {
        return (
            <React.Fragment>
            <div id="counter" style={{
                border:"1px solid black",
                padding:"10px",
                width:"80px"
            }}>
                {this.state.number}
            <button style={{display:"block"}} onClick={this.increment}>+</button>
            <button style={{display:"block"}} onClick={this.decrement}>-</button>
            <button style={{display:"block"}} onClick={this.reset}>Reset</button>
            </div>
            
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

    reset = () => {
        this.setState({
            'number': 0
        })
    }
}



// render() function is a requirement defined by React
