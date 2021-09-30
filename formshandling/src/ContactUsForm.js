import React from "react"

export default class ContactUsForm extends React.Component {
    state = {
        'firstname' : "",
        'lastname' : "",
        'country' : "",
        'enquiry' : "",
        'fruits':[]
    }

    render() {
        return (
            <React.Fragment>
                {/* Name */}
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstname" value={this.state.firstname} onChange={this.updateFormField} /> 
                    <label>Last Name:</label>
                    <input type="text" name="lastname" value={this.state.lastname} onChange={this.updateFormField} />
                </div>
                {/* Type of Enquiry */}
                <div>
                    <label>What is your enquiry</label>
                    <input type="radio" name="enquiry" value="marketing" onChange={this.updateFormField} checked={this.state.enquiry === "marketing"}/> Marketing
                    <input type="radio" name="enquiry" value="sales" onChange={this.updateFormField} checked={this.state.enquiry === "sales"}/> Sales
                    <input type="radio" name="enquiry" value="support" onChange={this.updateFormField} checked={this.state.enquiry === "support"}/> Support
                </div>
                {/* Country */}
                <div>
                    <label>Country:</label>
                    <select name="country" value={this.state.country} onChange={this.updateFormField}>
                        <option value="singapore">Singapore</option>
                        <option value="malaysia">Malaysia</option>
                        <option value="indonesia">Indonesia</option>
                    </select>
                </div>
                <button>Submit</button>

            </React.Fragment>
        )
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

} 