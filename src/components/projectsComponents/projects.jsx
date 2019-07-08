import React, { Component } from 'react';

class Project extends Component {
    render() { 
        return (  
            <div className="project" className="col">
                <h4>{this.props.Title}</h4>
                <img src={this.props.Img} alt="project"></img>
                <div>
                <a href={this.props.Github} target="_blank" rel="noopener noreferre">
                    <img src="../../imgs/github.png" alt="git"/>
                </a>
                <a href={this.props.Hosting} target="_blank">
                    <img src="../../imgs/eye.png" alt="git"/>
                </a>
                </div>
            </div>
        );
    }
}
 
export default Project;

{/*
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
                            </div> */}