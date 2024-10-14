import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import baliImage from '../../assets/imagenes/bali.jpg';
import parisImage from '../../assets/imagenes/paris.jpg';
import nyImage from '../../assets/imagenes/ny.jpg';
import aventuraImage from '../../assets/imagenes/aventura.jpg';
import familyImage from '../../assets/imagenes/familia.jpg';
import marriedImage from '../../assets/imagenes/lunaDeMiel.jpg';
import welcomeBackground from '../../assets/imagenes/welcome-background.jpg';

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

const cardContents = [
  {
    title: 'Tú eres el protagonista del viaje',
    description: 'Queremos que realices tu viaje, que si te apetece tengas opción de estar más tiempo en ese lugar.',
    image: familyImage,
  },
  {
    title: 'Explora tus posibilidades',
    description: 'Descubre opciones de viajes a medida que se adaptan a tus deseos y necesidades.',
    image: aventuraImage,
  },
  {
    title: 'Vive experiencias únicas',
    description: 'Cada viaje es una nueva aventura que esperar.',
    image: marriedImage,
  },
];

const Destinations = () => {
  return (
    <div className="container-fluid p-0">
      {/* Banner */}
      <div
        className="banner-container mb-4 position-relative"
      >
        <div className="welcome-text text-light">
          <h2 className="text-center">Viajes culturales únicos</h2>
          <p className="text-center">Descubre lugares que solo podrás alcanzar con nosotros.</p>
          <button className='btn mt-4'>Explorar Destinos</button>
        </div>
      </div>

      {/* Div azul debajo de la imagen de fondo */}
      <div className="bg-blue"></div>

      {/* Div gris debajo del azul */}
      <div className="bg-gray"></div>

      <h1 className="text-center mb-4" style={{ color: 'var(--secondary-color)' }}>Nuestros Destinos Populares</h1>
      <p className="text-center mb-5" style={{ color: 'var(--secondary-color)' }}>
        Descubre los mejores destinos para tus próximas vacaciones.
        Desde playas exóticas hasta ciudades vibrantes, ¡hay algo para todos!
      </p>

      {/* Carrusel */}
      <div className="carousel my-4 mx-auto w-50">
        <Carousel>
          {destinationsData.map((destination, index) => (
            <Carousel.Item key={index}>
              <div style={{ height: '300px', overflow: 'hidden' }}>
                <img
                  src={destination.image}
                  className="d-block w-100 rounded"
                  alt={destination.name}
                  style={{ height: '100%', objectFit: 'cover' }}
                />
              </div>
              <Carousel.Caption>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <h1 className="text-center my-5" id='xq'>¿Por qué elegir Viajes Ixa?</h1>

      <div className="row mx-auto w-75">
        {cardContents.map((card, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={card.image}
                className="card-img-top rounded"
                alt={card.title}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <DescriptionToggle description={card.description} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-5">
        <h3>Reserva con tranquilidad</h3>
        <p>Con Viajes Ixa cambiar de plan es fácil. Reserva sin preocupaciones.</p>
      </div>

      <div className="row w-75 mx-auto mb-5 d-flex align-items-stretch">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card h-100"> {/* Asegúrate de que la tarjeta también ocupe toda la altura */}
            <div className="card-body">
              <h5 className="card-title">Para cancelaciones 30 días antes de la salida del viaje</h5>
              <hr className="my-2" /> {/* Línea horizontal con margen vertical */}
              <p className="card-text">Si necesitas cambiar tus planes de viaje durante este año y antes de la confirmación del viaje, no te cobraremos nada.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card h-100"> {/* Asegúrate de que la tarjeta también ocupe toda la altura */}
            <div className="card-body">
              <h5 className="card-title">Para cancelaciones una vez confirmada la salida del viaje</h5>
              <hr className="my-2" /> {/* Línea horizontal con margen vertical */}
              <p className="card-text">La política de cancelación de Viajes Ixa siempre ha sido la de devolver todo el dinero posible. Consultanos sobre los seguros de cancelación.</p>
            </div>
          </div>
        </div>
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
        id="linkLeerMas"
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