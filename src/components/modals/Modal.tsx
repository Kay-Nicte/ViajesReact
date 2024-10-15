import React from 'react';

interface ModalProps {
    onClose: () => void; // Función para cerrar el modal
    title: string; // Título del modal
    body: React.ReactNode; // Cuerpo del modal, puede ser cualquier elemento React
}

const Modal: React.FC<ModalProps> = ({ onClose, title, body }) => {
    // Función para manejar la reserva
    const handleReserve = () => {
        alert("Reservado. ¡Feliz viaje! :)");
    };

    return (
        <div className="modal fade show" style={{ display: 'block' }} onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleReserve}>Reservar</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;