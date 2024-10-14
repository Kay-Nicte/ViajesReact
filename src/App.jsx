// src/App.jsx
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

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/destinos" element={<DestinationsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;