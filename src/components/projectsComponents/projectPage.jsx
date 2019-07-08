import React, { Component } from 'react';
import Project from './projects'

class ProjectsPage extends Component {

    render() { 
        const projectsArray = [
            {Title: "Contact Manager",
                Img: "../../imgs/contactmanagmentNew.png",
                Github: "https://github.com/evanallen13/IS-455-Project-4.0?files=1",
                Hosting: "https://is455-project-5c969.firebaseapp.com/"},
            {Title: "React Calculator",
                Img: "../../imgs/calc.png",
                Github: "https://github.com/evanallen13/React-Calculator?files=1",
                Hosting: "https://frosty-payne-feb44d.netlify.com/"},
          ]
        return ( 
            <div id="projects">
                <h1>Projects</h1>
                <div className="projectContainer">
                    <div className="projects" className="row justify-content-center">
                            {projectsArray.map(project =>
                                <Project
                                    key={project.projectTitle}
                                    Title={project.Title}
                                    Img={project.Img}
                                    Github={project.Github}
                                    Hosting={project.Hosting}>
                                </Project>)}
                    </div>
                </div>

                <a href="#top">Back to top of page</a>
            </div>
         );
    }
}
 
export default ProjectsPage;
