import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppFrío.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import FAQPage from './pages/FAQPage';
import Footer from './components/footer/Footer';
import ModalFavorites from './components/modals/ModalFavorites';
import { Destination } from './interface-models/interfaceDestination';
import ModalCart from './components/modals/ModalCart';
import ModalDestinations from './components/modals/ModalDestinations';

function App() {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
    const [favorites, setFavorites] = useState<Destination[]>([]);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [reservedDestinations, setCart] = useState<Destination[]>([]);
    const [destinations] = useState<{ id: number; name: string }[]>([]);
    const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
    const [isDestinationModalOpen, setIsDestinationModalOpen] = useState(false);

    // Maneja el término de búsqueda
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    // Maneja la apertura del modal de destinos
    const handleModalDestination = (destination: Destination) => {
        setSelectedDestination(destination);
        setIsDestinationModalOpen(true);
    };

    // Cierra el modal de destinos
    const closeDestinationModal = () => {
        setSelectedDestination(null);
        setIsDestinationModalOpen(false);
    };

    // Añade un destino a los favoritos
    const addToFavorites = (destination: Destination) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some(fav => fav.id === destination.id)) {
                return prevFavorites; // Si el destino ya está en favoritos, no se añade de nuevo
            }
            return [...prevFavorites, destination];
        });
    };

    // Elimina un destino de los favoritos
    const removeFromFavorites = (destination: Destination) => {
        setFavorites(prevFavorites =>
            prevFavorites.filter(fav => fav.id !== destination.id)
        );
    };


    // Añade un destino al carrito
    const addToCart = (destination: Destination) => {
        setCart((prevCart) => {
            if (prevCart.some(res => res.id === destination.id)) {
                return prevCart; // Si el destino ya está en el carrito, no se añade de nuevo
            }
            return [...prevCart, destination];
        });
    };

    // Elimina un destino del carrito
    const removeFromCart = (destination: Destination) => {
        setCart(prevCart =>
            prevCart.filter(res => res.id !== destination.id)
        );
    };

    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar
                    onSearch={handleSearch}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                    favorites={favorites}

                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    reservedDestinations={reservedDestinations}

                />
                <main className="flex-fill">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/destinos"
                            element={
                                <DestinationsPage
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                    addToFavorites={addToFavorites}
                                    removeFromFavorites={removeFromFavorites}
                                    addToCart={addToCart}
                                    removeFromCart={removeFromCart}
                                    destinations={destinations}

                                />
                            }
                        />
                        <Route path="/faq" element={<FAQPage />} />
                    </Routes>
                </main>
                <Footer />
                <ModalFavorites
                    favorites={favorites}
                    isOpen={isFavoritesModalOpen}
                    onClose={() => setIsFavoritesModalOpen(false)}
                    onAddToFavorites={addToFavorites}
                    onRemoveFromFavorites={removeFromFavorites}
                />

                {isDestinationModalOpen && selectedDestination && (
                    <ModalDestinations
                        title="Detalles del Destino"
                        body={<div>Información detallada del destino: {selectedDestination.name}</div>}
                        onAddToFavorites={addToFavorites}
                        onAddToCart={addToCart}
                        onClose={closeDestinationModal}
                        selectedDestination={selectedDestination}
                    />
                )}


                <ModalCart
                    reservedDestinations={reservedDestinations}
                    isOpen={isCartModalOpen}
                    onClose={() => setIsFavoritesModalOpen(false)}
                    onAddToCart={addToCart}
                    onRemoveFromCart={removeFromCart}
                />

            </div>
        </Router>
    );
}

export default App;