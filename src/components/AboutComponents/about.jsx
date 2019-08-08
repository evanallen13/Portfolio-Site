import React, { Component } from 'react';
import './about.css'

class About extends Component {
    state = {  }
    render() { 
        return (  
            <div id="aboutPage">
                <h1>About</h1>
                <div>
                <h2>Evan Allen</h2>
                <div className="info">
                    <h4>Phone: <a href="tel:714-264-2562">(714)264-2562</a></h4>
                    <h4>Email: <a href="mailto:evanallen13@gmail.com">evanallen13@gmail.com</a></h4>
                </div>
            </div>
                <div className="description">
                    <p>I am a full stack developer living in the Los Angeles area.</p>
                </div>
                <h4>Stack:</h4>
                <div className="skills row">
                    <div className="skill col">
                        <img src="../../imgs/skillimgs/html5.png" alt="html"/>
                        <p>html</p>
                    </div>
                    <div className="skill col">
                        <img src="../../imgs/skillimgs/css3.png" alt="css"/>
                        <p>css</p>
                    </div>
                    <div className="skill col">
                        <img src="../../imgs/skillimgs/js.png" alt="Js"/>
                        <p>JavaScript</p>
                    </div>
                    <div className="skill col">
                        <img src="../../imgs/skillimgs/react.png" alt="react"/>
                        <p>React</p>
                    </div>
                    <div className="skill col">
                        <img src="../../imgs/skillimgs/firebase.png" alt="Firebase"/>
                        <p>Firebase</p>
                    </div>
                    <div className="skill col">
                        <img src="../../imgs/skillimgs/node.png" alt="Node"/>
                        <p>NodeJs</p>
                    </div>
                    <div className="skill col">
                        <img src="../../imgs/skillimgs/bootstrap.png" alt="Bootstrap"/>
                        <p>Boostrap</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;