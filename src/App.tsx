// App.tsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppFrío.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import FAQPage from './pages/FAQPage'; // Importa la página de FAQ
import Footer from './components/footer/Footer';

function App() {
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para el término de búsqueda

    const handleSearch = (term: string) => {
        setSearchTerm(term); // Actualiza el término de búsqueda
    };

    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar onSearch={handleSearch} /> {/* Pasa la función de búsqueda aquí */}
                <main className="flex-fill">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/destinos"
                            element={
                                <DestinationsPage
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm} // Pasa también setSearchTerm
                                />
                            }
                        />
                        <Route path="/faq" element={<FAQPage />} /> {/* Añade la ruta para FAQ */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;