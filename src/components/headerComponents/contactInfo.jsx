import React, { Component } from 'react';

class Info extends Component {
    state = {  }
    render() { 
        return (  
            <div id="contactInfo">
                    <a href="mailto:evanallen13@gmail.com">
                        <img src="../../imgs/header/gmail.png" alt="email"/>
                    </a>
                    <a href="https://github.com/evanallen13" target="_blank">
                        <img src="../../imgs/header/github.png" alt="github"/>
                        </a>
                    <a href="tel:714-264-2562">
                        <img src="../../imgs/header/call.png" alt="phone"/></a><br/>
            </div>
        );
    }
}
 
export default Info;