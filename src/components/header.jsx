import React, { Component } from 'react';
import Info from './headerComponents/contactInfo'

class HeaderDiv extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="header">
                <Info></Info>
            </div>
         );
    }
}
 
export default HeaderDiv;