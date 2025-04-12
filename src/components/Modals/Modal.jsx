import React, { useState, useEffect } from 'react';
import estilom from "./Modal.module.scss";

const Modal = ({ isOpen, closeModal, onSave, universidad }) => {
  const [nombreEditado, setNombreEditado] = useState('');
  
  useEffect(() => {
    if (universidad) {
      setNombreEditado(universidad.nombre);
    }
  }, [universidad]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombreEditado.trim()) return;
    
    onSave({ 
      ...universidad, 
      nombre: nombreEditado 
    });
  };

  // Si el modal no está abierto, no renderizamos nada
  if (!isOpen) return null;

  return (
    <div className={estilom.modalOverlay || "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"}>
      <div className={estilom.modalContent}>
        <h2 className="text-xl font-bold mb-4">Editar Universidad</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={nombreEditado}
              onChange={(e) => setNombreEditado(e.target.value)}
              className={estilom.entrada}
              placeholder="Nombre de la universidad"
              autoFocus 
            />
          </div>
          
          <div className={estilom.botones}>

            <button 
              type="button" 
              onClick={closeModal}
              className={estilom.btnC}
            >
              Cancelar
            </button>
            <button 
              type="submit"
              className={estilom.btnG}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;