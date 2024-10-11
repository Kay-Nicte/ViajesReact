import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Destinations from './components/destinations/Destinations';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-fill"> 
        <Destinations />
      </main>
      <Footer />
    </div>
  );
}

export default App;