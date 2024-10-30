import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { FaShoppingCart, FaHeart, FaRegHeart } from 'react-icons/fa';
import baliImage from '/src/assets/imagenes/bali.jpg';
import parisImage from '/src/assets/imagenes/paris.jpg';
import nyImage from '/src/assets/imagenes/ny.jpg';
import portoImage from '/src/assets/imagenes/porto.jpg';
import ModalDestinations from '../components/modals/ModalDestinations';
import { Destination } from '../interface-models/interfaceDestination';
import ModalFavorites from '../components/modals/ModalFavorites';
import ModalCart from '../components/modals/ModalCart';
import CartPage from './CartPage';
import '../AppFrío.css';

interface DestinationsPageProps {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    addToFavorites: (destination: Destination) => void;
    removeFromFavorites: (destination: Destination) => void;
    destinations: { id: number; name: string }[];
    addToCart: (destination: Destination) => void;
    removeFromCart: (destination: Destination) => void;
}

const DestinationsPage: React.FC<DestinationsPageProps> = ({
    searchTerm,
    setSearchTerm,
    addToFavorites,
    removeFromFavorites,
    addToCart,
    removeFromCart,
}) => {
    const destinations: Destination[] = [
        { id: 1, name: 'Bali', description: 'Una isla tropical paradisíaca', image: baliImage, price: 1300, popularity: 5, visitRoutes: ['Ruta 1: Meditación', 'Ruta 2: Templos', 'Ruta 3: Playas'] },
        { id: 2, name: 'París', description: 'La ciudad del amor y la moda', image: parisImage, price: 200, popularity: 4, visitRoutes: ['Ruta 1: Gastronomía', 'Ruta 2: Museos', 'Ruta 3: Monumentos'] },
        { id: 3, name: 'Nueva York', description: 'La ciudad que nunca duerme', image: nyImage, price: 1500, popularity: 5, visitRoutes: ['Ruta 1: Monumentos', 'Ruta 2: Broadway', 'Ruta 3: Central Park'] },
        { id: 4, name: 'Porto', description: 'La ciudad de los puentes y el vino', image: portoImage, price: 300, popularity: 3, visitRoutes: ['Ruta 1: Cata de Vinos', 'Ruta 2: Paseo por el río', 'Ruta 3: Centro Histórico'] },
    ];

    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
    const [showModal, setShowModalDestinations] = useState(false);
    const [minPrice, setMinPrice] = useState<number | ''>('');
    const [maxPrice, setMaxPrice] = useState<number | ''>('');
    const [sortOption, setSortOption] = useState('popularity');
    const [favorites, setFavorites] = useState<Destination[]>([]);
    const [showFavoritesModal, setShowFavoritesModal] = useState(false);
    const [reservedDestinations, setCart] = useState<Destination[]>([]);
    const [showCartModal, setShowCartModal] = useState(false);

    const handleShowModalDestinations = (destination: Destination) => {
        setSelectedDestination(destination);
        setShowModalDestinations(true);
    };

    const handleCloseModalDestinations = () => {
        setShowModalDestinations(false);
        setSelectedDestination(null);
    };

    const handleFavoriteToggle = (destination: Destination) => {
        if (favorites.some(fav => fav.id === destination.id)) {
            console.log('Removing from favorites:', destination);
            handleRemoveFromFavorites(destination);
        } else {
            console.log('Añadir a fav. DestinationsPage:', destination);
            handleAddToFavorites(destination);
        }
    };

    const handleRemoveFromFavorites = (destination: Destination) => {
        console.log("Eliminando destino desde DestinationsPage:", destination.name);
        setFavorites(prevFavorites =>
            prevFavorites.filter(fav => fav.id !== destination.id));
        removeFromFavorites(destination);
    };

    const handleAddToFavorites = (destination: Destination) => {
        if (!favorites.some(fav => fav.id === destination.id)) {
            addToFavorites(destination);
            setFavorites(prevFavorites => [...prevFavorites, destination]);
        }
    };

    const handleCartToggle = (destination: Destination) => {
        if (reservedDestinations.some(res => res.id === destination.id)) {
            console.log('Removing from cart:', destination);
            handleRemoveFromCart(destination);
        } else {
            console.log('Añadir al carrito desde DestinationsPage:', destination);
            handleAddToCart(destination);
        }
    };

    const handleRemoveFromCart = (destination: Destination) => {
        console.log("Eliminando destino desde DestinationsPage:", destination.name);
        setCart(prevCart =>
            prevCart.filter(res => res.id !== destination.id)); // Actualiza el estado del carrito
        removeFromCart(destination); // Llama la función que recibe como prop para actualizaciones externas
    };

    const handleAddToCart = (destination: Destination) => {
        if (!reservedDestinations.some(res => res.id === destination.id)) {
            addToCart(destination);
            setCart(prevCart => [...prevCart, destination]);
        }
    };

    const handleConfirm = () => {
        setShowCartModal(false);
    };

    const filteredDestinations = destinations.filter(destination => {
        const isNameMatch = destination.name.toLowerCase().includes(searchTerm.toLowerCase());
        const isMinPriceMatch = minPrice ? destination.price >= minPrice : true;
        const isMaxPriceMatch = maxPrice ? destination.price <= maxPrice : true;
        return isNameMatch && isMinPriceMatch && isMaxPriceMatch;
    });

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
                    // <div className="col-6 col-md-4 mb-4" key={index}>
                    <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
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
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleFavoriteToggle(destination);
                                    }}
                                    aria-label="Agregar o quitar de favoritos"
                                >
                                    {favorites.some(fav => fav.id === destination.id) ? (
                                        <FaHeart size={25} className="text-danger" />
                                    ) : (
                                        <FaRegHeart size={25} />
                                    )}
                                </span>

                                <p className="card-text flex-grow-1 text-center">{destination.description}</p>
                                <div className="d-flex justify-content-center mt-2">
                                    <button
                                        className={`btn ${reservedDestinations.some(res => res.id === destination.id) ? 'btn-secondary' : 'btn-primary'} h-100 w-50 ms-1`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleCartToggle(destination);
                                        }}
                                    >
                                        {reservedDestinations.some(res => res.id === destination.id) ? 'Reservado' : 'Reservar'}
                                    </button>

                                    <button
                                        className="btn btn-outline-primary w-50 mx-1"
                                        onClick={() => handleShowModalDestinations(destination)}
                                    >
                                        Más Info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedDestination && (
                <ModalDestinations
                    onClose={handleCloseModalDestinations}
                    title={selectedDestination.name}
                    body={
                        <>
                            <p><strong>Precio:</strong> ${selectedDestination.price}</p>
                            <p><strong>Descripción:</strong> {selectedDestination.description}</p>
                            <p><strong>Rutas a Visitar:</strong></p>
                            <ul>
                                {selectedDestination.visitRoutes.map((route, index) => (
                                    <li key={index}>{route}</li>
                                ))}
                            </ul>
                        </>
                    }
                    onAddToFavorites={handleAddToFavorites}
                    selectedDestination={selectedDestination}
                    onAddToCart={handleAddToCart}
                />
            )}

            {showFavoritesModal && (
                <ModalFavorites
                    isOpen={showFavoritesModal}
                    onClose={() => setShowFavoritesModal(false)}
                    favorites={favorites}
                    onAddToFavorites={handleAddToFavorites}
                    onRemoveFromFavorites={handleRemoveFromFavorites}
                />
            )}

            {showCartModal && (
                <ModalCart
                    isOpen={showCartModal}
                    onClose={() => setShowCartModal(false)}
                    reservedDestinations={reservedDestinations}
                    onAddToCart={handleAddToCart}
                    onRemoveFromCart={handleRemoveFromCart}
                />
            )}


        </div>
    );
};

export default DestinationsPage;