import React from "react"

export default class Dice extends React.Component {
    state ={
        count: 1,
        diceColor: "pink",
        diceTextColor: "red"
    }

    click = () => {
        let diceValue = this.randomNumber()
        if (diceValue === 1) {
            this.setState({
                count: diceValue,
                diceTextColor: "red"
            })
        } else if (diceValue === 6) {
            this.setState({
                count: diceValue,
                diceTextColor: "green"
            })
        } else {
            this.setState({
                count:diceValue,
                diceTextColor: "black"
            })
        } 
    }

    randomNumber() {
        let diceValue = Math.floor(Math.random() * (6 - 1 + 1) + 1)
        return parseInt(diceValue)
    }
    render() {
        return (
            <div onClick={this.click} style={{
                border:"1px solid black",
                fontSize:"500%",
                width:"120px",
                height:"120px",
                backgroundColor: this.state.diceColor,
                color: this.state.diceTextColor,
            }}>
                {this.state.count}
            </div>
        )
    }
}
