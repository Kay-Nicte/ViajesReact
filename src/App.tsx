// App.tsx
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AppFrío.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/home/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import FAQPage from './pages/FAQPage'; 
import Footer from './components/footer/Footer';

function App() {
    const [searchTerm, setSearchTerm] = useState<string>(''); // Estado para el término de búsqueda

    const handleSearch = (term: string) => {
        setSearchTerm(term); // Actualiza el término de búsqueda
    };

    return (
        <Router>
            <div className="d-flex flex-column min-vh-100">
                <Navbar onSearch={handleSearch} />
                <main className="flex-fill">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route
                            path="/destinos"
                            element={
                                <DestinationsPage
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm} 
                                />
                            }
                        />
                        <Route path="/faq" element={<FAQPage />} /> 
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;