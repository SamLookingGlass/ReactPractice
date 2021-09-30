import React from "react"

export default class Dice extends React.Component {
    state ={
        count: this.props.initialValue
    }

    click = () => {
        this.setState({
            'count': Math.floor(Math.random() * (6 - 1 + 1) + 1)
        })
    }

    render() {
        return (
            <div onClick={this.click} style={{
                border:"1px solid black",
                fontSize:"500%",
                width:"120px",
                height:"120px",
                backgroundColor:'pink'
            }}>
                {this.state.count}
            </div>
        )
    }
}
