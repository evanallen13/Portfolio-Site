import React from 'react';
import './App.css';
import HeaderDiv from './components/headerComponents/header'
import Projects from './components/projectsComponents/projects'
import About from './components/AboutComponents/about'

function App() {
  return (
    <div className="App">
      <HeaderDiv></HeaderDiv>
      <Projects></Projects>
      <About></About>
    </div>
  );
}

export default App;
