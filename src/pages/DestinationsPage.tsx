import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import baliImage from '/src/assets/imagenes/bali.jpg';
import parisImage from '/src/assets/imagenes/paris.jpg';
import nyImage from '/src/assets/imagenes/ny.jpg';
import portoImage from '/src/assets/imagenes/porto.jpg';
import Modal from '../components/modals/modal';
import '../AppFrío.css';

// Define las propiedades que recibirá el componente
interface DestinationsPageProps {
    searchTerm: string; // Acepta searchTerm como prop
    setSearchTerm: (term: string) => void; // Acepta setSearchTerm como prop
}

interface Destination {
    name: string;
    description: string;
    image: string;
    price: number;
    visitRoutes: string[];
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ searchTerm, setSearchTerm }) => {
    const destinations: Destination[] = [
        { name: 'Bali', description: 'Una isla tropical paradisíaca', image: baliImage, price: 1300, visitRoutes: ['Ruta 1: Meditación', 'Ruta 2: Templos', 'Ruta 3: '] },
        { name: 'París', description: 'La ciudad del amor y la moda', image: parisImage, price: 200, visitRoutes: ['Ruta 1: Gastronomía', 'Ruta 2: ', 'Ruta 3: '] },
        { name: 'Nueva York', description: 'La ciudad que nunca duerme', image: nyImage, price: 1500, visitRoutes: ['Ruta 1: Monumentos', 'Ruta 2: ', 'Ruta 3: '] },
        { name: 'Porto', description: 'La ciudad de los puentes y el vino', image: portoImage, price: 300, visitRoutes: ['Ruta 1: Cata de Vinos', 'Ruta 2: Paseo por el río', 'Ruta 3: Centro Histórico'] },
    ];

    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [minPrice, setMinPrice] = useState<number | ''>(''); // Estado para el precio mínimo
    const [maxPrice, setMaxPrice] = useState<number | ''>(''); // Estado para el precio máximo

    const handleShowModal = (destination: Destination) => {
        setSelectedDestination(destination);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDestination(null);
    };

    // Filtra destinos según el término de búsqueda y el rango de precios
    const filteredDestinations = destinations.filter(destination => {
        const isNameMatch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isMinPriceMatch = minPrice ? destination.price >= minPrice : true; // Comprobar precio mínimo
        const isMaxPriceMatch = maxPrice ? destination.price <= maxPrice : true; // Comprobar precio máximo
        return isNameMatch && isMinPriceMatch && isMaxPriceMatch;
    });

    return (
        <div className='mx-4'>
            <h2 className='text-center my-5'>Explora Nuestros Destinos</h2>

            {/* Sección de Filtros */}
            <div className="filters mb-4 d-flex flex-wrap justify-content-center">
                <input
                    type="text"
                    placeholder="Buscar destinos..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Utiliza la función recibida para actualizar el término de búsqueda
                    className="form-control me-2" // Espacio entre campos
                    style={{
                        borderRadius: '20px',
                        padding: '10px 20px',
                        border: '1px solid #ccc',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        fontSize: '16px',
                        width: '200px', // Ancho reducido
                    }}
                />

                {/* Filtros de precio */}
                <input
                    type="number"
                    placeholder="Min. Precio"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')} // Actualiza el estado del precio mínimo
                    className="form-control me-2" // Espacio entre campos
                    style={{
                        borderRadius: '20px',
                        padding: '10px 20px',
                        border: '1px solid #ccc',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        fontSize: '16px',
                        width: '140px', // Ancho reducido
                    }}
                />
                <input
                    type="number"
                    placeholder="Max. Precio"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')} // Actualiza el estado del precio máximo
                    className="form-control"
                    style={{
                        borderRadius: '20px',
                        padding: '10px 20px',
                        border: '1px solid #ccc',
                        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                        fontSize: '16px',
                        width: '140px', // Ancho reducido
                    }}
                />
            </div>

            <div className="row">
                {filteredDestinations.map((destination, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card d-flex flex-column h-100">
                            <img
                                src={destination.image}
                                className="card-img-top img-fluid"
                                alt={destination.name}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title mx-auto">{destination.name}</h5>
                                <p className="card-text flex-grow-1 mx-auto">{destination.description}</p>
                                <div className="d-flex justify-content-center mt-2">
                                    <Link to={`/reservar/${destination.name.toLowerCase()}`} className="btn btn-primary w-45 mx-1">Reservar</Link>
                                    <button
                                        className="btn btn-outline-primary w-45 mx-1"
                                        onClick={() => handleShowModal(destination)}
                                    >
                                        Más Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal Component */}
            {showModal && selectedDestination && (
                <Modal 
                    onClose={handleCloseModal} 
                    title={selectedDestination.name} 
                    body={
                        <>
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
        </div>
    );
};

export default DestinationsPage;