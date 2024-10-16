import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Para los iconos de corazón
import baliImage from '/src/assets/imagenes/bali.jpg';
import parisImage from '/src/assets/imagenes/paris.jpg';
import nyImage from '/src/assets/imagenes/ny.jpg';
import portoImage from '/src/assets/imagenes/porto.jpg';
import Modal from '../components/modals/ModalDestinations';
import '../AppFrío.css';

//Propiedades que recibirá el componente
interface DestinationsPageProps {
    searchTerm: string; // Acepta searchTerm como prop
    setSearchTerm: (term: string) => void; // Acepta setSearchTerm como prop
}

interface Destination {
    name: string;
    description: string;
    image: string;
    price: number;
    popularity: number;
    visitRoutes: string[];
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({ searchTerm, setSearchTerm }) => {
    const destinations: Destination[] = [
        { name: 'Bali', description: 'Una isla tropical paradisíaca', image: baliImage, price: 1300, popularity: 5, visitRoutes: ['Ruta 1: Meditación', 'Ruta 2: Templos', 'Ruta 3: Playas'] },
        { name: 'París', description: 'La ciudad del amor y la moda', image: parisImage, price: 200, popularity: 4, visitRoutes: ['Ruta 1: Gastronomía', 'Ruta 2: Museos', 'Ruta 3: Monumentos'] },
        { name: 'Nueva York', description: 'La ciudad que nunca duerme', image: nyImage, price: 1500, popularity: 5, visitRoutes: ['Ruta 1: Monumentos', 'Ruta 2: Broadway', 'Ruta 3: Central Park'] },
        { name: 'Porto', description: 'La ciudad de los puentes y el vino', image: portoImage, price: 300, popularity: 3, visitRoutes: ['Ruta 1: Cata de Vinos', 'Ruta 2: Paseo por el río', 'Ruta 3: Centro Histórico'] },
    ];

    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [minPrice, setMinPrice] = useState<number | ''>(''); // Estado para el precio mínimo
    const [maxPrice, setMaxPrice] = useState<number | ''>(''); // Estado para el precio máximo
    const [sortOption, setSortOption] = useState('popularity'); // Opción de ordenación inicial
    const [favorites, setFavorites] = useState<string[]>([]); // Estado para Favoritos

    const handleShowModal = (destination: Destination) => {
        setSelectedDestination(destination);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedDestination(null);
    };

    const toggleFavorite = (destinationName: string) => {
        if (favorites.includes(destinationName)) {
            // Si ya es favorito, lo quitamos
            setFavorites(favorites.filter(fav => fav !== destinationName));
            alert(`${destinationName} eliminado de Favoritos`);
        } else {
            // Si no es favorito, lo añadimos
            setFavorites([...favorites, destinationName]);
            alert(`${destinationName} agregado a Favoritos`);
        }
    };


    // Filtra destinos según el término de búsqueda y el rango de precios
    const filteredDestinations = destinations.filter(destination => {
        const isNameMatch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isMinPriceMatch = minPrice ? destination.price >= minPrice : true; // Comprobar precio mínimo
        const isMaxPriceMatch = maxPrice ? destination.price <= maxPrice : true; // Comprobar precio máximo
        return isNameMatch && isMinPriceMatch && isMaxPriceMatch;
    });

    // Ordena destinos según la opción seleccionada
    const sortedDestinations = [...filteredDestinations].sort((a, b) => {
        switch (sortOption) {
            case 'price':
                return a.price - b.price;
            case 'popularity':
                return b.popularity - a.popularity;
            default:
                return 0;
        }
    });

    const sortOptions = [
        { value: 'popularity', label: 'Popularidad' },
        { value: 'price', label: 'Precio' },
    ];

    return (
        <div className='mx-4'>
            <h2 className='text-center my-5'>Explora Nuestros Destinos</h2>

            {/* Sección de Filtros */}
            <div className="filter-container mb-4 d-flex flex-wrap justify-content-center align-items-center">
                <input
                    type="text"
                    placeholder="Buscar destinos"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control me-2 rounded-pill filter-width text-center"
                />
                <input
                    type="number"
                    placeholder="Min. Precio"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value ? Number(e.target.value) : '')}
                    className="form-control me-2 rounded-pill filter-width text-center"
                />
                <input
                    type="number"
                    placeholder="Max. Precio"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : '')}
                    className="form-control rounded-pill filter-width text-center"
                />
                <div className="filter-width">
                    <Select
                        options={sortOptions}
                        onChange={(selectedOption) => setSortOption(selectedOption?.value || 'popularity')}
                        className="react-select mx-2 text-center"
                        classNamePrefix="select"
                        placeholder="Ordenar por..."
                        styles={{
                            container: (base) => ({
                                ...base,
                                width: '100%',
                                minWidth: '139px',
                            }),
                            control: (base) => ({
                                ...base,
                                width: '100%',
                            }),
                        }}
                    />
                </div>
            </div>

            <div className="row">
                {sortedDestinations.map((destination, index) => (
                    <div className="col-6 col-md-4 mb-4" key={index}>
                        <div className="card d-flex flex-column h-100">
                            <img
                                src={destination.image}
                                className="card-img-top img-fluid"
                                alt={`Imagen de ${destination.name}`}
                                style={{ height: '200px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <span
                                    className="corazon justify-content-end"
                                    onClick={() => toggleFavorite(destination.name)}
                                    aria-label="Agregar a favoritos"
                                >
                                    {favorites.includes(destination.name) ? (
                                        <FaHeart color="red" size={24} />
                                    ) : (
                                        <FaRegHeart color="gray" size={24} />
                                    )}
                                </span>
                                <p className="card-text flex-grow-1 text-center">{destination.description}</p>
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