import React, { Component } from 'react';

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div id="projects">
                <h1>Projects</h1>
                <div className="projectContainer">
                    <div className="projects">
                        <div className="row">

                            <div className="project" className="col">
                                <h4 className="projectTitle">Contact Manager</h4>
                                <div className="projectPicture">
                                    <img src="../../imgs/contactmanagmentNew.png"></img>
                                </div>
                                <div className="overlay">
                                    <a href="https://github.com/evanallen13/IS-455-Project-4.0?files=1" target="_blank">
                                        <img src="../../imgs/github.png" alt="git"/>
                                    </a>
                                    <a href="https://is455-project-5c969.firebaseapp.com/" target="_blank">
                                        <img src="../../imgs/eye.png" alt="git"/>
                                    </a>
                                </div>
                            </div>
                            <div className="project" className="col">
                                <h4 className="projectTitle">React Calculator</h4>
                                <div className="projectPicture">
                                    <img src="../../imgs/calc.png"></img>
                                </div>
                                <div className="overlay">
                                    <a href="https://github.com/evanallen13/React-Calculator?files=1" target="_blank">
                                        <img src="../../imgs/github.png" alt="git"/>
                                    </a>
                                    <a href="https://frosty-payne-feb44d.netlify.com/" target="_blank">
                                        <img src="../../imgs/eye.png" alt="git"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#top">Back to top of page</a>
            </div>
         );
    }
}
 
export default Projects;