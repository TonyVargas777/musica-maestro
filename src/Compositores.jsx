import React from 'react';

function Compositores({ compositores }) {
  return (
    <>
      {compositores.map((compositor, index) => (
        <>
        <h2 key={index}>{compositor.nombre}</h2>
        <h2 key={index}><li>{compositor.fecha}</li></h2>       
            {compositor.canciones.map((cancion, idx) => (
              <ul><li key={idx}>{cancion}</li></ul>
            ))}          
        </>
      ))}
    </>
  );
}

export default Compositores;
