import React from "react"

export default class ContactUsForm extends React.Component {
    state = {
        'firstname':'Test',
        'lastname':'Test',
        'enquiry':'',
        'country':''
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={this.state.name} onChange={this.updateFormField}/>
                    <label>Last Name:</label>
                    <input type="text" value={this.state.lastname} onChange={this.updateFormField}/>
                </div>
                <div>
                <label>What is your enquiry related to?</label>
                    <input type="radio" value="marketing" checked={this.state.enquiry} onChange={this.updateFormField} />Marketing
                    <input type="radio" value="sales" checked={this.state.enquiry} onChange={this.updateFormField} />Sales
                    <input type="radio" value="support" checked={this.state.enquiry} onChange={this.updateFormField} />Support
                    <input type="radio" value="others" checked={this.state.enquiry} onChange={this.updateFormField} />Others
                </div>
                <div>
                    <label>Country:</label>
                    <select value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>
                <button onClick={this.alertUser}>Submit</button>
            </React.Fragment>
        )
    }
    
    // Elegant way 
    updateFormField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    alertUser = () => {
        return(
            alert(this.state.firstname)
        )
    }
}