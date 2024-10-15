import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppFrío.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import DestinationsPage from './pages/DestinationsPage';
import HomePage from './components/home/HomePage';

function App() {
    const [count, setCount] = useState(0);
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
                        <Route path="/destinos" element={<DestinationsPage searchTerm={searchTerm} />} /> {/* Pasa el término de búsqueda a la página de destinos */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;