import { Destination } from '@/interface-models/interfaceDestination';
import React, { useState } from 'react';

interface ModalDestinationProps {
    onClose: () => void; // Para cerrar el modal
    title: string; // Título del modal
    body: JSX.Element;
    onAddToFavorites: (destination: Destination) => void;
    selectedDestination: Destination;
    onAddToCart: (destination: Destination) => void;
}


const ModalDestinations: React.FC<ModalDestinationProps> = ({ onClose, title, body, selectedDestination, onAddToFavorites, onAddToCart }) => {

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
                        <button
                            type="button"
                            className="btn"
                            onClick={() => onAddToFavorites(selectedDestination)}
                        >
                            Agregar a Favoritos
                        </button>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => onAddToCart(selectedDestination)}
                        >
                            Reservar
                        </button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>
                            Cerrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalDestinations;