import React, { Component } from 'react';
import './project.css'

class Project extends Component {
    render() { 
        return ( 
            <div className='p-2'>
                <h4>{this.props.Title}</h4>
                <div className='overplayContainer'>
                    <img src={this.props.Img} alt="project" className="projectBigImg"></img>
                    <div className="project-links">
                    <a href={this.props.Github} target="_blank" rel="noopener noreferrer" >
                         <img src="../../imgs/projects/github.png" alt="git" className="projectImg"/>
                     </a>
                     <a href={this.props.Hosting} target="_blank" rel="noopener noreferrer">
                         <img src="../../imgs/projects/eye.png" alt="git" className="projectImg"/>
                     </a>
                    </div>
                </div>
                <div className="experience">
                <h5>What I Learned:</h5>
                     <p className="learned">{this.props.Learned}</p>
                <h5>Skills:</h5>
                     {this.props.Skills.map(skill =>
                         <img src={skill} alt="skill" className='skill'></img>
                     )}
                 </div>
            </div>
        );
    }  
}
 
export default Project;
