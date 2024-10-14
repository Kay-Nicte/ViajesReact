import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener esto importado
import baliImage from '/src/assets/imagenes/bali.jpg';
import parisImage from '/src/assets/imagenes/paris.jpg';
import nyImage from '/src/assets/imagenes/ny.jpg';
import '../AppFrío.css';

const DestinationsPage = () => {
  const destinations = [
    { name: 'Bali', description: 'Una isla tropical paradisíaca', image: baliImage },
    { name: 'París', description: 'La ciudad del amor y la moda', image: parisImage },
    { name: 'Nueva York', description: 'La ciudad que nunca duerme', image: nyImage },
  ];

  return (
    <div className="container mt-5">
      <h2 className='text-center my-5'>Explora Nuestros Destinos</h2>
      <div className="row">
        {destinations.map((destination, index) => (
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
                <Link to={`/reservar/${destination.name.toLowerCase()}`} className="btn btn-primary mt-2 w-50 mx-auto">Reservar</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsPage;
