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

    // Calcular el precio total por todos los destinos
    const calculateTotalPrice = () => {
        return reservedDestinations.reduce((total, destination) => {
            const personCount = personCounts[destination.id] || 1; // Número de personas por destino
            return total + (destination.price * personCount); // Sumar el precio por el número de personas
        }, 0);
    };

    return (
        <div className="container">
            <h2 className='text-center my-4'>Carrito</h2>
            {reservedDestinations.length > 0 ? (
                <div className="table-responsive text-center">
                    <table className="table table-striped table-bordered table-dark">
                        <thead>
                            <tr>
                                <th className='w-25'>Destino</th>
                                <th className='w-25'>Personas</th>
                                <th className='w-25'>Precio</th>
                                <th className='w-25'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reservedDestinations.map((destination: Destination) => (
                                <tr key={destination.id}>
                                    <td>{destination.name}</td>
                                    <td>
                                        <select
                                            className="form-select text-center"
                                            value={personCounts[destination.id] || 1} // Valor por defecto 1
                                            onChange={(e) => handlePersonCountChange(destination.id, Number(e.target.value))}
                                        >
                                            {[1, 2, 3, 4, 5].map((count) => (
                                                <option key={count} value={count}>
                                                    {count} {count > 1 ? 'personas' : 'persona'}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td>
                                        {(destination.price * (personCounts[destination.id] || 1))}€
                                    </td>
                                    <td>
                                        <button
                                            style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}
                                            onClick={() => onRemoveFromCart(destination)}
                                            aria-label="Eliminar destino"
                                        >
                                            <FaTimes />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={2} className="text-end fs-5"><strong>Total</strong></td>
                                <td colSpan={2} className='text-start fs-5'><strong>{calculateTotalPrice()}€</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            ) : (
                <p>No hay destinos reservados.</p>
            )}
        </div>
    );
};

export default CartPage;