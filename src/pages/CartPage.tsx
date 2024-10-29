import { useLocation } from 'react-router-dom';
import { Destination } from '../interface-models/interfaceDestination';

const CartPage = () => {
    const location = useLocation();
    const { reservedDestinations } = location.state || { reservedDestinations: [] };

    return (
        <div>
            <h2>Carrito</h2>
            {reservedDestinations.length > 0 ? (
                <ul>
                    {reservedDestinations.map((destination: Destination) => (
                        <li key={destination.id}>{destination.name}</li>
                    ))}
                </ul>
            ) : (
                <p>No hay destinos reservados.</p>
            )}
        </div>
    );
};

export default CartPage;