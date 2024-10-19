import { useEffect, useState } from 'react';
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

function App() {
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para el término de búsqueda
    const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState(false);
    const [favorites, setFavorites] = useState<Destination[]>([]); // Estado para los destinos favoritos
    const [destinations, setDestinations] = useState<{ id: number; name: string }[]>([]); // Estado para los destinos

    // Maneja el término de búsqueda
    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    // Añade un destino a los favoritos y abre el modal
    const addToFavorites = (destination: Destination) => {
        setFavorites((prevFavorites) => {
            // Si el destino ya está en favoritos, no se añade de nuevo
            if (prevFavorites.some(fav => fav.id === destination.id)) {
                return prevFavorites;
            }
            return [...prevFavorites, destination];
        });
    };

    const removeFromFavorites = (destination: Destination) => {
        setFavorites(prevFavorites =>
            prevFavorites.filter(fav => fav.id !== destination.id)
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
            </div>
        </Router>
    );
}

export default App;