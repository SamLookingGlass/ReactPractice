import React from "react"

export default class SurveyForm extends React.Component {
    state = {
        name:'',
        color:'',
        country:''
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>Name:</label>
                    <input type="text" value={this.state.name} onChange={this.updateName}/>
                </div>
                <div>
                <label>Favourite Colour:</label>
                    <input type="radio" value="red" checked={this.state.color=='red'} onChange={this.updateColor}/>Red
                    <input type="radio" value="blue" checked={this.state.color=='blue'} onChange={this.updateColor}/>Blue
                    <input type="radio" value="green" checked={this.state.color=='green'} onChange={this.updateColor}/>Green
                </div>
                <div>
                    <label>Country:</label>
                    <select value={this.state.country} onChange={this.updateCountry}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>
                <button>Submit</button>
            </React.Fragment>
        )
    }
    // Text Box
    updateName = (e) => {
        this.setState({
            name:e.target.value        
        })
    }

    updateColor = (e) => {
        this.setState({
            color:e.target.value
        })
    }

    
    updateCountry = (e) => {
        this.setState({
            country:e.target.value
        })
    }
}