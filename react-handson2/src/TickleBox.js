import React from "react"

export default class TickleBox extends React.Component {
    state ={
        isTickled: false,
        textBox: this.props.text
    }

    render() {
        return (
            <div onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} style={{
                border:"1px solid black",
                padding:"30px",
                width:"100px",
                background:"red"
            }}>
                {this.state.textBox}
                {this.state.isTickled ? <h2>Hehe, that tickles!</h2> : <p>Please tickle me!</p>}
            </div>
        )
    }

    hoverOn = () => {
        this.setState({
            'isTickled':true
        })
    }

    hoverOff = () => {
        this.setState({
            'isTickled':false
        })
    }

}
