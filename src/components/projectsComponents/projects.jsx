import React, { Component } from 'react';

class Project extends Component {
    render() { 
        return (  
            <div className="project">
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
