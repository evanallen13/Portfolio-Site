import React, { Component } from 'react';
import Project from './projects'
import { projectsArray } from './projectsArray.js'

class ProjectsPage extends Component {

    render() { 
        return ( 
            <div id="projects">
                <h1>Projects</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    {projectsArray.map(project =>
                        <Project
                            key={project.Key}
                            Title={project.Title}
                            Img={project.Img}
                            Github={project.Github}
                            Hosting={project.Hosting}
                            Skills={project.Skills}
                            Learned={project.Learned}>
                        </Project>)}
                </div>
            </div>
         );
    }
}
 
export default ProjectsPage;
