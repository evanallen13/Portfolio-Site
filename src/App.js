import React from 'react';
import './App.css';
import HeaderDiv from './components/headerComponents/header'
import ProjectsPage from './components/projectsComponents/projectPage'
import About from './components/AboutComponents/about'

function App() {
  
  return (
    <div className="App">
      <HeaderDiv></HeaderDiv>
      <ProjectsPage></ProjectsPage>
      <About></About>
    </div>
  );
}

export default App;
