import React, { useState } from 'react';
import baliImage from '../../assets/imagenes/bali.jpg';
import parisImage from '../../assets/imagenes/paris.jpg';
import nyImage from '../../assets/imagenes/ny.jpg';

const destinationsData = [
  {
    name: 'Bali',
    description: 'Disfruta un paraíso terrenal donde encontrar la verdadera paz.',
    image: baliImage,
  },
  {
    name: 'París',
    description: 'Explora la ciudad del amor.',
    image: parisImage,
  },
  {
    name: 'Nueva York',
    description: 'Descubre la ciudad que nunca duerme, llena de energía y oportunidades.',
    image: nyImage,
  },
];

const Destinations = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Nuestros Destinos Populares</h1>
      <p className="text-center mb-5">
        Descubre los mejores destinos para tus próximas vacaciones.
        Desde playas exóticas hasta ciudades vibrantes, ¡hay algo para todos!
      </p>
      <div className="row">
        {destinationsData.map((destination, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={destination.image}
                className="card-img-top"
                alt={destination.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{destination.name}</h5>
                <DescriptionToggle description={destination.description} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

interface DescriptionToggleProps {
  description: string;
}

const DescriptionToggle: React.FC<DescriptionToggleProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <p className={`card-text ${isExpanded ? 'expanded' : 'truncated'}`}>
        {description}
      </p>
      <a
        href="#"
        className="link text-info"
        onClick={(e) => {
          e.preventDefault(); // Evita que el enlace navegue
          toggleDescription(); // Cambia el estado
        }}
      >
        {isExpanded ? 'Leer menos' : 'Leer más'}
      </a>
    </>
  );
};

export default Destinations;