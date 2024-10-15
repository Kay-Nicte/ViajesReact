import React from 'react';

interface ModalProps {
    destination: { name: string; price: number; visitRoutes: string[] } | null;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ destination, onClose }) => {
    if (!destination) return null;

    return (
        <div className="modal fade show" style={{ display: 'block' }} onClick={onClose}>
            <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{destination.name}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <p><strong>Precio:</strong> {destination.price}€</p>
                        <p><strong>Rutas:</strong></p>
                        <ul>
                            {destination.visitRoutes.map((route, index) => (
                                <li key={index}>{route}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;