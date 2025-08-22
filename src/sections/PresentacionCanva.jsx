import React from 'react';

function PresentacionCanva() {
  return (
    <section id="presentacion-canva" style={{marginBottom: '2rem'}}>
      <h2>Elaboración de mermelada nutracéutica</h2>
      <p>
        Puedes ver el paso a paso de la elaboración de la mermelada nutracéutica haciendo click en el siguiente enlace:
      </p>
      <a
        href="https://www.canva.com/design/DAGwcHvMGvQ/QQ6gG2HhK9KIa4FGUcRS9g/edit?utm_content=DAGwcHvMGvQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        target="_blank"
        rel="noopener noreferrer"
        className="canva-btn"
      >
        Ver presentación en Canva
      </a>
    </section>
  );
}

export default PresentacionCanva;
