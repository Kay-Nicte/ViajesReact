import { Destination } from '@/interface-models/interfaceDestination';
import React from 'react';

interface ModalCartProps {
    reservedDestinations: Destination[];
    isOpen: boolean;
    onClose: () => void;
    onAddToCart: (destination: Destination) => void;
    onRemoveFromCart: (destination: Destination) => void;
}

const ModalCart: React.FC<ModalCartProps> = ({ reservedDestinations, isOpen, onClose, onRemoveFromCart }) => {
    if (!isOpen) return null;

    const handleRemove = (destination: Destination) => {
        console.log("Eliminando destino desde ModalCart:", destination);
        onRemoveFromCart(destination); // Llamar a la función del padre!!
    };

    return (
        <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Carrito de Reservas</h5>
                        <button type="button" className="btn-close" onClick={onClose} />
                    </div>
                    <div className="modal-body">
                        {reservedDestinations.length > 0 ? (
                            <ul>
                                {reservedDestinations.map((destination) => (
                                    <li key={destination.id}>
                                        <strong>{destination.name}</strong>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No tienes destinos reservados.</p>
                        )}
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

export default ModalCart;