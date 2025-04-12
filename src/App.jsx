import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import UniversidadForm from './components/UniversidadForm';
import UniversidadList from './components/UniversidadList';
import estilo from "./App.module.scss";
import imagenU from "./assets/colegio.png";
import imagenR from "./assets/rompecabezas.png";

function App() {
  const [universidades, setUniversidades] = useState([]);
  const isInitialLoad = useRef(true);

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const datosGuardados = localStorage.getItem('universidades');
    if (datosGuardados) {
      setUniversidades(JSON.parse(datosGuardados));
    }
  }, []);

  // Guardar en localStorage cuando cambia el estado
  useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }
    localStorage.setItem('universidades', JSON.stringify(universidades));
  }, [universidades]);

  const agregarUniversidad = (uni) => {
    setUniversidades([...universidades, { ...uni, id: Date.now() }]);
  };

  const eliminarUniversidad = (id) => {
    setUniversidades(universidades.filter(u => u.id !== id));
  };

  // Función para actualizar una universidad
  const actualizarUniversidad = (uniActualizada) => {
    // Comprueba que la universidad tenga un id
    if (!uniActualizada || !uniActualizada.id) {
      console.error("Error: Intentando actualizar una universidad sin ID");
      return;
    }
    
    // Actualiza el array de universidades
    const nuevasUniversidades = universidades.map(u => 
      u.id === uniActualizada.id ? uniActualizada : u
    );
    
    // Actualiza el estado
    setUniversidades(nuevasUniversidades);
    
    // Consola para depuración
    console.log("Universidad actualizada:", uniActualizada);
    console.log("Nuevas universidades:", nuevasUniversidades);
  };

  return (
    <div className={estilo.app}>
      <div className={estilo.cabecera}>
      <img src={imagenU} width={120} />
      <h1 className={estilo.titulo}>UNIVERSIDADES</h1>
      <img src={imagenR} width={120} />
      </div>
      <div className={estilo.contenerdor}>
        <div className={estilo.divs}>
          <UniversidadForm agregarUniversidad={agregarUniversidad} />
        </div>
        <div>
          <UniversidadList
            universidades={universidades}
            onEliminar={eliminarUniversidad}
            onEditar={actualizarUniversidad} // ¡Importante! Cambiamos esto para que llame directamente a la función de actualización
          />
        </div>
      </div>
    </div>
  );
}

export default App;