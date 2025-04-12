import React, { useState } from 'react';
import estilof from "./Universidad.module.scss";

const UniversidadForm = ({ agregarUniversidad }) => {
  const [nombre, setNombre] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) return;

    agregarUniversidad({ nombre });
    setNombre('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <div className={estilof.formul}>
        <input
          type="text"
          placeholder="Nombre de la universidad"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className={estilof.entrada}
        />
        <button type="submit" className={estilof.btn}>
          Agregar
        </button>
      </div>
    </form>
  );
};

export default UniversidadForm;