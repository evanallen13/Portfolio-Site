import React, { Component } from 'react';
import Info from './contactInfo'
import NavBar from './NavBar'

class HeaderDiv extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="header">
                <h1 id="nameH1">Evan A//en</h1>
                <NavBar></NavBar>
                <Info></Info>
            </div>
         );
    }
}
 
export default HeaderDiv;