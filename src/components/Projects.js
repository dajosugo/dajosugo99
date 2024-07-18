// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Proyectos</h2>
      <div className="projects-list">
        <div className="project-item">
          <h3>Proyecto 1</h3>
          <p>Descripción del proyecto 1.</p>
        </div>
        <div className="project-item">
          <h3>Proyecto 2</h3>
          <p>Descripción del proyecto 2.</p>
        </div>
        {/* Añade más proyectos según sea necesario */}
      </div>
    </section>
  );
};

export default Projects;
