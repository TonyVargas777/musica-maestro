import React from "react";

function Compositores({ compositores }) {
  return (
    <>
      {compositores.map((compositor, index) => (
        <>
          <ul>
            <p key={index}>{compositor.nombre}</p>
            <p key={index}>
              <li>{compositor.fecha}</li>
            </p>
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
