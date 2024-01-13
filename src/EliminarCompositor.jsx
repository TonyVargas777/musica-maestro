import React, { useState } from "react";

function EliminarCompositor({ compositores, handleEliminarCompositor }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleEliminarCompositorClick = () => {
    if (inputValue.trim() !== "") {
      handleEliminarCompositor(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleEliminarCompositorClick}>
        Eliminar Compositor
      </button>
    </div>
  );
}

export default EliminarCompositor;
