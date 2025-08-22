import { useState } from 'react';

// Font Awesome CDN para iconos
const icons = [
  'fa-solid fa-leaf',
  'fa-solid fa-file-lines',
  'fa-solid fa-bullseye',
  'fa-solid fa-list-check',
  'fa-solid fa-flask',
  'fa-solid fa-diagram-project',
  'fa-solid fa-circle-question',
  'fa-solid fa-star',
  'fa-solid fa-users',
  'fa-solid fa-apple-whole',
  'fa-solid fa-box-open',
  'fa-solid fa-hourglass-half',
  'fa-solid fa-calendar-days',
  'fa-solid fa-money-bill-wave',
];

const items = [
  { href: '#presentacion-canva', text: 'Presentación Canva' },
  { href: '#introduccion', text: 'Introducción' },
  { href: '#resumen', text: 'Resumen Ejecutivo' },
  { href: '#objetivo-general', text: 'Objetivo General' },
  { href: '#objetivos-especificos', text: 'Objetivos Específicos' },
  { href: '#metodologia', text: 'Metodología' },
  { href: '#alineacion-planes', text: 'Alineación' },
  { href: '#planteamiento-problema', text: 'Planteamiento del Problema' },
  { href: '#resultados-esperados', text: 'Resultados Esperados' },
  { href: '#encuesta-cultivadores', text: 'Encuesta Cultivadores' },
  { href: '#frutas-encuesta', text: 'Frutas Encuesta' },
  { href: '#productos-encuesta', text: 'Productos Encuesta' },
  { href: '#maduracion-encuesta', text: 'Maduración Encuesta' },
  { href: '#cronograma', text: 'Cronograma' },
  { href: '#presupuesto', text: 'Presupuesto ' },
  { href: '#conclusiones-container', text: 'Conclusiones ' },
  { href: '#referencias-container', text: 'Referencias Bibliográficas ' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className={`navbar${open ? ' open' : ''}`}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <ul>
        {items.map((item, idx) => (
          <li key={item.href}>
            <a href={item.href} style={{animationDelay: `${idx * 0.07}s`}}>
              <i className={icons[idx]}></i>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
