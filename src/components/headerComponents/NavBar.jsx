import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class NavBar extends Component {
    state = {  
    }
    render() { 
        return (  
            <div id="Nav"> 
                <a href="#projects"><button className="NavBtn">Projects</button></a>
                <a href="#aboutPage"><button className="NavBtn">About</button></a>
                {/* <a href="#contact"><button className="NavBtn">Contact</button></a> */}
                <a href="../../resume.pdf" download="Evan_Allen_Resume"><button className="NavBtn">Resume.pdf</button></a>
            </div>
        );
    }
}
 
export default NavBar;