import React from 'react';

function Autores() {
  return (
    <section id="autores" style={{marginTop: '3rem', padding: '2rem 0', borderTop: '2px solid #e0e0e0'}}>
      <h2>Entidades y Autores</h2>
      <ul style={{listStyle: 'none', paddingLeft: 0, fontSize: '1.1rem'}}>
        <li><strong>Entidades participantes:</strong> SENA - Centro Agroturístico, Regional Santander</li>
        <li><strong>Autor:</strong> Instructor Edwin Raúl Guerra Santos</li>
        <li><strong>Coautores:</strong> Aprendices</li>
        <li style={{marginLeft: '2rem'}}>Luna Alejandra Calderón Rico</li>
        <li style={{marginLeft: '2rem'}}>Leidy Julieth Moreno Sandoval</li>
      </ul>
    </section>
  );
}

export default Autores;
