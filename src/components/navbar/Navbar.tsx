import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modals/modal'; 

interface Destination {
    name: string;
    description: string;
    price: number;
    visitRoutes: string[];
}

interface NavbarProps {
    onSearch: (term: string) => void; // Agregar la prop onSearch
}

const Navbar: React.FC<NavbarProps> = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState<Destination[]>([]);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

    const destinations: Destination[] = [
        { name: 'Bali', description: 'Una isla tropical paradisíaca', price: 1300, visitRoutes: ['Ruta 1: Meditación', 'Ruta 2: Templos', 'Ruta 3: '] },
        { name: 'París', description: 'La ciudad del amor y la moda', price: 200, visitRoutes: ['Ruta 1: Gastronomía', 'Ruta 2: ', 'Ruta 3: '] },
        { name: 'Nueva York', description: 'La ciudad que nunca duerme', price: 1500, visitRoutes: ['Ruta 1: Monumentos', 'Ruta 2: ', 'Ruta 3: '] },
        { name: 'Porto', description: 'Una ciudad llena de encanto', price: 500, visitRoutes: ['Ruta 1: Vino', 'Ruta 2: ', 'Ruta 3: '] },
    ];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value); // Llama a la función onSearch al cambiar el input

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

    const handleCloseModal = () => {
        setSelectedDestination(null);
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
                        <li className="nav-item">
                            <a className="nav-link active text-light" aria-current="page" href="#">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Paquetes</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle text-light"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Destinos
                            </a>
                            <ul className="dropdown-menu">
                                {destinations.map((destination, index) => (
                                    <li key={index}><a className="dropdown-item" href="#">{destination.name}</a></li>
                                ))}
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#">Favoritos</a>
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
                                {suggestions.map((suggestion, index) => (
                                    <li key={index} className="list-group-item list-group-item-action" onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            {/* Usar el componente Modal para mostrar la información del destino seleccionado */}
            {selectedDestination && (
                <Modal
                    onClose={handleCloseModal}
                    title={selectedDestination.name}
                    body={
                        <>
                            <p><strong>Descripción:</strong> {selectedDestination.description}</p>
                            <p><strong>Precio:</strong> {selectedDestination.price}€</p>
                            <p><strong>Rutas:</strong></p>
                            <ul>
                                {selectedDestination.visitRoutes.map((route, index) => (
                                    <li key={index}>{route}</li>
                                ))}
                            </ul>
                        </>
                    }
                />
            )}
        </nav>
    );
};

export default Navbar;