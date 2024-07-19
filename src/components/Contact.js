import React from 'react';
import './App.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contacto</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <label htmlFor="name">Daniel Jose Suarez Gonzalez</label>
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <label htmlFor="email">dajosugo99@gmail.com</label>
        </div>
        <div className="form-group">
          <label htmlFor="Numero">Numero</label>
          <label htmlFor="Numero">3153480342</label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;