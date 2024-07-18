// src/components/Navbar.js
import React from 'react';
import './App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#about">Sobre Mí</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#skills">Habilidades</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
