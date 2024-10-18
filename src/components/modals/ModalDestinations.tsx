import { Destination } from '@/interface-models/interfaceDestination';
import React from 'react';

interface ModalDestinationProps {
    onClose: () => void; // Función para cerrar el modal
    title: string; // Título del modal
    body: JSX.Element;
    onAddToFavorites: (destination: Destination) => void;
    selectedDestination: Destination;
}

const ModalDestinations: React.FC<ModalDestinationProps> = ({ onClose, title, body, selectedDestination, onAddToFavorites }) => {
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
                        <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => onAddToFavorites(selectedDestination)}
                        >
                            Agregar a Favoritos
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleReserve}>
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