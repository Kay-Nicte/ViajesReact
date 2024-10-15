import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import baliImage from '/src/assets/imagenes/bali.jpg';
import parisImage from '/src/assets/imagenes/paris.jpg';
import nyImage from '/src/assets/imagenes/ny.jpg';
import portoImage from '/src/assets/imagenes/porto.jpg';
import Modal from '../components/modals/modal'; 
import '../AppFrío.css';

interface Destination {
    name: string;
    description: string;
    image: string;
    price: number;
    visitRoutes: string[];
}

interface DestinationsPageProps {
    searchTerm: string; // Prop para recibir el término de búsqueda
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ searchTerm }) => {
    const destinations: Destination[] = [
        { name: 'Bali', description: 'Una isla tropical paradisíaca', image: baliImage, price: 1300, visitRoutes: ['Ruta 1: Meditación', 'Ruta 2: Templos', 'Ruta 3: '] },
        { name: 'París', description: 'La ciudad del amor y la moda', image: parisImage, price: 200, visitRoutes: ['Ruta 1: Gastronomía', 'Ruta 2: ', 'Ruta 3: '] },
        { name: 'Nueva York', description: 'La ciudad que nunca duerme', image: nyImage, price: 1500, visitRoutes: ['Ruta 1: Monumentos', 'Ruta 2: ', 'Ruta 3: '] },
        { name: 'Porto', description: 'La ciudad de los puentes y el vino', image: portoImage, price: 300, visitRoutes: ['Ruta 1: Cata de Vinos', 'Ruta 2: Paseo por el río', 'Ruta 3: Centro Histórico'] },
    ];

    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
    const [showModal, setShowModal] = useState(false); // Estado para controlar la visibilidad del modal

    const handleShowModal = (destination: Destination) => {
        setSelectedDestination(destination);
        setShowModal(true); // Muestra el modal
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDestination(null);
    };

    // Filtra destinos según el término de búsqueda recibido como prop
    const filteredDestinations = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='mx-4'>
            <h2 className='text-center my-5'>Explora Nuestros Destinos</h2>
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