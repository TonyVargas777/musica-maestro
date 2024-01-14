import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Compositores from "./Compositores";
import EliminarCompositor from "./EliminarCompositor";

function App() {
  const [nombre, setNombre] = useState("");
  const [anio, setAnio] = useState("");
  const [cancion, setCancion] = useState("");
  const [compositores, setCompositores] = useState([
    {
      nombre: "Wolfgang Amadeus Mozart",
      fecha: 1756,
      canciones: ["Symphonie Nr 40", "Don Giovanni"],
    },
    {
      nombre: "Ludwig van Beethoven",
      fecha: 1770,
      canciones: ["Symphonie No.5", "Piano Sonata No.32"],
    },
    {
      nombre: "Johann Sebastian Bach",
      fecha: 1685,
      canciones: ["Vivace", "Largo ma non tanto"],
    },
  ]);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleAnioChange = (event) => {
    setAnio(event.target.value);
  };

  const handleCancionChange = (event) => {
    setCancion(event.target.value);
  };

  const handleAddCompositor = () => {
    if (nombre.trim() !== "" && anio.trim() !== "") {
      const nuevoCompositor = {
        nombre: nombre,
        fecha: parseInt(anio),
        canciones: cancion
          .split(";")
          .map((item) => item.trim())
          .filter((cancion) => cancion !== ""),
      };
      setCompositores([...compositores, nuevoCompositor]);
      setNombre("");
      setAnio("");
      setCancion("");
    }
  };

  const handleEliminarCompositor = (nombre) => {
    setCompositores(
      compositores.filter((compositor) => compositor.nombre !== nombre)
    );
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/eliminar">Eliminar Compositor</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Inicio
              compositores={compositores}
              nombre={nombre}
              anio={anio}
              cancion={cancion}
              handleAddCompositor={handleAddCompositor}
              handleNombreChange={handleNombreChange}
              handleAnioChange={handleAnioChange}
              handleCancionChange={handleCancionChange}
            />
          }
        />
        <Route
          path="/eliminar"
          element={
            <EliminarCompositor
              compositores={compositores}
              handleEliminarCompositor={handleEliminarCompositor}
            />
          }
        />
      </Routes>
    </Router>
  );
}

function Inicio({
  compositores,
  nombre,
  anio,
  cancion,
  handleAddCompositor,
  handleNombreChange,
  handleAnioChange,
  handleCancionChange,
}) {
  return (
    <div>
      <h1>Compositores</h1>
      <Compositores compositores={compositores} />
      <form>
        <h2>FORMULARIO:</h2>
        <div>
          <label>--Nombre--:</label>
          <input type="text" name="text" value={nombre} onChange={handleNombreChange} aria-labelledby="nombre"/>
        </div>
        <div>
          <label>----Año----:</label>
          <input type="number" name="text" value={anio} onChange={handleAnioChange} aria-labelledby="number"/>
        </div>
        <div>
          <label>Canciones (separadas por ";"):</label>
          <input type="text" name="text" value={cancion} onChange={handleCancionChange} aria-labelledby="text"/>
        </div>
        <button type="button" onClick={handleAddCompositor}>
          Agregar Compositor
        </button>
      </form>
    </div>
  );
}

export default App;
