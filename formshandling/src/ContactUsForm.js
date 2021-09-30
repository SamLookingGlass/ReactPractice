import React from "react"

export default class ContactUsForm extends React.Component {
    state = {
        'firstname' : "",
        'lastname' : "",
        'country' : "",
        'enquiry' : "",
        'contact':[]
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
                <button onClick={this.alertUser}>Submit</button>
                {/* Contact */}
                <div>
                    <label>How would you like to be contacted?:</label>
                    <input type="checkbox" name="contact" value="email" onChange={this.updateContact} /><span>Email</span>
                    <input type="checkbox" name="contact" value="phone" onChange={this.updateContact} /><span>Phone</span>
                    <input type="checkbox" name="contact" value="slowmail" onChange={this.updateContact} /><span>Slow Mail</span>
                </div>
            </React.Fragment>
        )
    }

    updateFormField = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    alertUser = () => {
        let fname = String(this.state.firstname)
        let lname = String(this.state.lastname)
        let country = String(this.state.country)
        let enquiry = String(this.state.enquiry)

        return(
            alert(`Hello ${fname} ${lname}, you are from ${country} with a ${enquiry} enquiry.`)
        )
    }

    updateContact = (e) => {
        
        if (this.state.contact.includes(e.target.value)) {
            let indexToRemove = this.state.contact.indexOf(e.target.value);
            let cloned = [ ...this.state.contact.slice(0, indexToRemove), ...this.state.contact.slice(indexToRemove+1)];
            this.setState({
                'contact':cloned
            })

        } else {
            this.setState({
                'contact': [...this.state.contact, e.target.value]
            })
        }

    }
} 