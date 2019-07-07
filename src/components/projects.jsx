import React, { Component } from 'react';

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="projects">
                <h1>Projects</h1>
                <div className="projectContainer">
                <img src="../../imgs/contactmanagmentNew.png"></img>
                <div className="overlay">
                    <div><img src="../../imgs/github.png" alt="git"/></div>
                </div>
                </div>
            </div>
         );
    }
}
 
export default Projects;