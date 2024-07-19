import React from 'react';
import './App.css';

const Contact = () => {
    return (
      <section id="contact" className="contact-section">
        <h2>Contacto</h2>
        <p>Si deseas ponerte en contacto conmigo, puedes hacerlo a través de las siguientes formas:</p>
        <div className="contact-info">
          <p><strong>Correo Electrónico:</strong> <a href="mailto:tuemail@example.com">tuemail@example.com</a></p>
          <p><strong>Teléfono:</strong> <a href="tel:+1234567890">+1234567890</a></p>
        </div>
      </section>
    );
  };
  
  export default Contact;