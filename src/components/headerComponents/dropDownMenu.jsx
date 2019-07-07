import React, { Component } from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';


class dropdown extends Component {
    state = {  
    }
    render() { 
        return (  
            <div id="dropDownMenu"> 
                <div className="dropdown show">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="#projects">Projects</a>
                    <a className="dropdown-item" href="https://github.com/evanallen13">Another action</a>
                    <a className="dropdown-item" href="https://github.com/evanallen13">Something else here</a>
                </div>
            </div>
            </div>
        );
    }
}
 
export default dropdown;