import React from 'react';
import { Destination } from '../interface-models/interfaceDestination';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

interface CartPageProps {
    reservedDestinations: Destination[];
    onRemoveFromCart: (destination: Destination) => void;
}

const CartPage: React.FC<CartPageProps> = ({ reservedDestinations, onRemoveFromCart }) => {
    const [personCounts, setPersonCounts] = useState<{ [key: number]: number }>({}); // Almacena la cantidad de personas para cada destino

    const handlePersonCountChange = (destinationId: number, count: number) => {
        setPersonCounts(prevCounts => ({
            ...prevCounts,
            [destinationId]: count,
        }));
    };
    return (
        <div>
            <h2>Carrito</h2>
            {reservedDestinations.length > 0 ? (
                <ul>
                    {reservedDestinations.map((destination: Destination) => (
                        <li key={destination.id}>
                            <div className="d-flex flex-row align-items-center">
                                <span className="me-2">{destination.name}</span>

                                <select
                                    className="form-select me-2"
                                    value={personCounts[destination.id] || 1} // Valor por defecto 1
                                    onChange={(e) => handlePersonCountChange(destination.id, Number(e.target.value))}
                                    style={{ width: '130px' }}
                                >
                                    {[1, 2, 3, 4, 5].map((count) => (
                                        <option key={count} value={count}>
                                            {count} {count > 1 ? 'personas' : 'persona'}
                                        </option>
                                    ))}
                                </select>

                                <button
                                    style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
                                    onClick={() => onRemoveFromCart(destination)}
                                    aria-label="Eliminar destino"
                                >
                                    <FaTimes />
                                </button>
                            </div>

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