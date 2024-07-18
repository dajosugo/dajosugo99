import React from 'react';
import Navbar from './components/Navbar.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
