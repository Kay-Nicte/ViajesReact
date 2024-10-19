import React from 'react';

interface ModalCartPreviewProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalCartPreview: React.FC<ModalCartPreviewProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // No renderizar el modal si no está abierto

    return (
        <div className="modal show" style={{ display: 'block' }} onClick={onClose}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Vista Previa del Carrito</h5>
                    </div>
                    <div className="modal-body">
                        <p>Contenido del carrito...</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCartPreview;
