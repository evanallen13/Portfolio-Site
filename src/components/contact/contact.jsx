import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
    render() { 
        return ( 
            <div id="contact">
                <h1>Contact</h1> 
                <h2>Evan Allen</h2>
                <div className="info">
                    <h4>Phone: <a href="tel:714-264-2562">(714)264-2562</a></h4>
                    <h4>Email: <a href="mailto:evanallen13@gmail.com">evanallen13@gmail.com</a></h4>
                    <h4>Location: Long Beach, CA</h4>
                </div>
            </div>
         );
    }
}
 
export default Contact;