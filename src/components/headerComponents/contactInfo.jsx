import React, { Component } from 'react';
import Dropdown from './dropDownMenu'

class Info extends Component {
    state = {  }
    render() { 
        return (  
            <div id="contactInfo">
                    <h1 id="nameH1">Evan A//en</h1>
                    <a href="mailto:evanallen13@gmail.com">
                        <img src="../../imgs/gmailnew.png" alt="email"/>
                    </a>
                    <a href="https://github.com/evanallen13" target="_blank">
                        <img src="../../imgs/github.png" alt="github"/>
                        </a>
                    <a href="tel:714-254-2562">
                        <img src="../../imgs/call.png" alt="phone"/></a><br/>
                    <Dropdown></Dropdown>
            </div>
        );
    }
}
 
export default Info;