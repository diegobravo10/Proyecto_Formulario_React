
import estilom from "./Modal.module.scss";
const ModalEliminar = ({isOpen, closeModal, onEliminar}) =>{

    if (!isOpen) return null;

    return(
        <div className={estilom.modalOverlay || "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"}>
            <div className={estilom.modalContent}>
                <h2>¿Estas Seguro de Eliminar?</h2>
                <div className={estilom.botones}>
                    <button
                    className={estilom.btnC}
                    type="button" 
                    onClick={closeModal}
                    >Cancelar
                    </button>

                    <button
                    className={estilom.btnEliminar}
                    type="button"
                    onClick={onEliminar}
                    >Eliminar</button>
                </div>
        </div>
    </div>

    );
}

export default ModalEliminar;