import React from "react";

function Compositores({ compositores }) {
  return (
    <>
      {compositores.map((compositor, index) => (
        <>
          <ul>
            <li key={index}>{compositor.nombre}</li>
            <li key={index}>
              <li>{compositor.fecha}</li>
            </li>
            {compositor.canciones.map((cancion, idx) => (
              <ul>
                <li key={idx}>{cancion}</li>
              </ul>
            ))}
          </ul>
        </>
      ))}
    </>
  );
}

export default Compositores;
