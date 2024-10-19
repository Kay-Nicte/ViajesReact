import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalDestination from '../modals/ModalDestinations';
import ModalFavorites from '../modals/ModalFavorites';
import ModalContact from '../modals/ModalContact';
import { Destination } from '../../interface-models/interfaceDestination';
import baliImage from '/src/assets/imagenes/bali.jpg';
import parisImage from '/src/assets/imagenes/paris.jpg';
import nyImage from '/src/assets/imagenes/ny.jpg';
import portoImage from '/src/assets/imagenes/porto.jpg';

interface NavbarProps {
    onSearch: (term: string) => void;
    addToFavorites: (destination: Destination) => void;
    removeFromFavorites: (destination: Destination) => void;
    favorites: Destination[]; 
}

const Navbar: React.FC<NavbarProps> = ({ onSearch, addToFavorites, removeFromFavorites, favorites }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<Destination[]>([]);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
    const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const destinations: Destination[] = [
        { id: 1, name: 'Bali', description: 'Una isla tropical paradisíaca', price: 1300, visitRoutes: ['Ruta 1: Meditación', 'Ruta 2: Templos'], image: baliImage, popularity: 5 },
        { id: 2, name: 'París', description: 'La ciudad del amor y la moda', price: 200, visitRoutes: ['Ruta 1: Gastronomía'], image: parisImage, popularity: 5 },
        { id: 3, name: 'Nueva York', description: 'La ciudad que nunca duerme', price: 1500, visitRoutes: ['Ruta 1: Monumentos'], image: nyImage, popularity: 5 },
        { id: 4, name: 'Porto', description: 'Una ciudad llena de encanto', price: 500, visitRoutes: ['Ruta 1: Vino'], image: portoImage, popularity: 5 },
    ];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);

        if (value) {
            const filteredDestinations = destinations.filter(destination =>
                destination.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredDestinations);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: Destination) => {
        setSelectedDestination(suggestion);
        setSuggestions([]);
    };

    const handleCloseModalDestination = () => {
        setSelectedDestination(null);
    };

    const handleAddToFavorites = (destination: Destination) => {
        addToFavorites(destination);
        alert(`${destination.name} añadido a favoritos!`);
    };

    const handleCloseModalFavorites = () => {
        setIsFavoritesModalOpen(false);
    };

    const handleCloseModalContact = () => {
        setIsContactModalOpen(false);
    };



    return (
        <nav className="navbar navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-light">
                    Viajes Ixa
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link
                                className="nav-link dropdown-toggle text-light"
                                to="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Destinos
                            </Link>
                            <ul className="dropdown-menu">
                                {destinations.map((destination) => (
                                    <li key={destination.id}>
                                        <Link
                                            className="dropdown-item"
                                            to="#"
                                            onClick={() => handleSuggestionClick(destination)}
                                        >
                                            {destination.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="#">Paquetes</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-light"
                                to="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsFavoritesModalOpen(true);
                                }}
                            >
                                Favoritos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link text-light"
                                to="#"
                                onClick={() => setIsContactModalOpen(true)}
                            >
                                Contacto
                            </Link>
                        </li>
                    </ul>
                    <div className="position-relative">
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Destinos"
                                aria-label="Search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            <button className="btn-search" type="submit">Buscar</button>
                        </form>
                        {suggestions.length > 0 && (
                            <ul className="list-group position-absolute" style={{ zIndex: 1000, left: 0, right: 0 }}>
                                {suggestions.map((suggestion) => (
                                    <li key={suggestion.id} className="list-group-item list-group-item-action" onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {selectedDestination && (
                <ModalDestination
                    onClose={handleCloseModalDestination}
                    title={selectedDestination.name}
                    body={(
                        <>
                            <p><strong>Descripción:</strong> {selectedDestination.description}</p>
                            <p><strong>Precio:</strong> {selectedDestination.price}€</p>
                            <p><strong>Rutas:</strong></p>
                            <ul>
                                {selectedDestination.visitRoutes.map((route, index) => (
                                    <li key={index}>{route}</li>
                                ))}
                            </ul>
                            <img src={selectedDestination.image} alt={selectedDestination.name} style={{ width: '100%', height: 'auto' }} />
                        </>
                    )}
                    selectedDestination={selectedDestination}
                    onAddToFavorites={handleAddToFavorites}
                />
            )}

            {/* Modal de favoritos */}
            {isFavoritesModalOpen && (
                <ModalFavorites
                    onClose={handleCloseModalFavorites}
                    favorites={favorites}
                    isOpen={isFavoritesModalOpen}
                    onAddToFavorites={(destination) => {destination} }
                    onRemoveFromFavorites={(destination) => {destination}}
                />
            )}


            {/* Modal de contacto */}
            {isContactModalOpen && (
                <ModalContact
                    onClose={handleCloseModalContact}
                />
            )}
        </nav>
    );
};

export default Navbar;