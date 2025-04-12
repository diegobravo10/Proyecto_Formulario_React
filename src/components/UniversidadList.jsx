import React, { useState } from 'react';
import estilol from "./Universidad.module.scss";
import Modal from './Modals/Modal';
import ModalE from './Modals/ModalEliminar';

const UniversidadList = ({ universidades, onEliminar, onEditar }) => {
  const [abrirM, setAbrirM] = useState(false);
  const [abrirE, setAbrirE] = useState(false);
  const [idSeleccionado, setIdSeleccionado] = useState(null);
  const [universidadAEditar, setUniversidadAEditar] = useState(null);

  if (universidades.length === 0) {
    return <p>No hay universidades registradas.</p>;
  }

  const manejarEditar = (uni) => {
    setUniversidadAEditar(uni);
    setAbrirM(true);
  };

  const eliminarN = (uni) => {
    setIdSeleccionado(uni);
    setAbrirE(true);
  };

  const confirmarEliminacion = () =>{
    onEliminar(idSeleccionado);
    setAbrirE(false);
    setIdSeleccionado(null);

  } 

  const guardarCambios = (uniEditada) => {
    onEditar(uniEditada);
    

    setAbrirM(false);
    setUniversidadAEditar(null);
  };

  return (
    <ul className={estilol.universidadesList}>
      {universidades.map((uni) => (
        <li key={uni.id} className={estilol.universidadItem}>
          <span className={estilol.bulletPoint}>•</span>
          <span className={estilol.nombreUniversidad}>{uni.nombre}</span>
          <div className={estilol.botones}>
            <button 
              onClick={() => manejarEditar(uni)} 
              className={estilol.btnEditar}
            >
              Editar
            </button>
            <button 
              onClick={() => eliminarN(uni.id)}
              className={estilol.btnEliminar}
            >
              Eliminar
            </button>
          </div>
        </li>
      ))}

      {abrirM && (
        <Modal
          isOpen={abrirM} 
          closeModal={() => setAbrirM(false)} 
          onSave={guardarCambios}  
          universidad={universidadAEditar}  
        />
      )}


      {abrirE && (
        <ModalE
          isOpen={abrirE} 
          closeModal={() => setAbrirE(false)} 
          onEliminar={confirmarEliminacion}

        />
      )}
    </ul>
  );
};

export default UniversidadList;