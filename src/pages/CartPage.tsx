import React from 'react';
import { Destination } from '../interface-models/interfaceDestination';
import { FaTimes } from 'react-icons/fa';

interface CartPageProps {
    reservedDestinations: Destination[];
    onRemoveFromCart: (destination: Destination) => void;
}

const CartPage: React.FC<CartPageProps> = ({ reservedDestinations, onRemoveFromCart }) => {
    return (
        <div>
            <h2>Carrito</h2>
            {reservedDestinations.length > 0 ? (
                <ul>
                    {reservedDestinations.map((destination: Destination) => (
                        <li key={destination.id}>
                            {destination.name}
                            {/* <button onClick={() => onRemoveFromCart(destination)}>Eliminar</button> */}
                            <button
                                style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
                                onClick={() => onRemoveFromCart(destination)}
                                aria-label="Eliminar destino"
                            >
                                <FaTimes />
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay destinos reservados.</p>
            )}
        </div>
    );
};

export default CartPage;