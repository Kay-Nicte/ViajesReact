import { Destination } from '@/interface-models/interfaceDestination';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface ModalFavoritesProps {
    favorites: Destination[];
    isOpen: boolean;
    onClose: () => void;
    onRemoveFromFavorites: (destination: Destination) => void; // Cambiado
}

const ModalFavorites: React.FC<ModalFavoritesProps> = ({ favorites, isOpen, onClose, onRemoveFromFavorites }) => {
    if (!isOpen) return null;

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
                                        <button
                                            className="btn btn-sm mx-2"
                                            onClick={() => onRemoveFromFavorites(destination)} // Cambiado
                                        >
                                            X
                                        </button>
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
