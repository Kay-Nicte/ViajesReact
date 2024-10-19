import { Destination } from '@/interface-models/interfaceDestination';
import React from 'react';

interface ModalFavoritesProps {
    favorites: Destination[];
    isOpen: boolean;
    onClose: () => void;
    onAddToFavorites: (destination: Destination) => void;
    onRemoveFromFavorites: (destination: Destination) => void;
}

const ModalFavorites: React.FC<ModalFavoritesProps> = ({ favorites, isOpen, onClose, onRemoveFromFavorites }) => {
    if (!isOpen) return null;

    const handleRemove = (destination: Destination) => {
        console.log("Eliminando destino desde ModalFavorites:", destination);
        onRemoveFromFavorites(destination); // Llamar a la función del padre!!
    };

    return (
        <div className="modal fade show" style={{ display: 'block' }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Favoritos</h5>
                        <button type="button" className="btn-close" onClick={onClose} />
                    </div>
                    <div className="modal-body">
                        {favorites.length > 0 ? (
                            <ul>
                                {favorites.map((destination) => (
                                    <li key={destination.id}>
                                        <strong>{destination.name}</strong>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No tienes destinos favoritos.</p>
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

export default ModalFavorites;