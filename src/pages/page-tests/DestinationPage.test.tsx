import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import DestinationsPage from '../DestinationsPage'; 
import '@testing-library/jest-dom';

describe('DestinationsPage', () => {
    it('debe mostrar los destinos y permitir agregar a favoritos', () => {
        const mockSearchTerm = ''; 
        const mockSetSearchTerm = jest.fn(); 
        const mockAddToFavorites = jest.fn(); 

        // Simulación de destinos para pasar como props
        const mockDestinations = [
            { id: 1, name: 'Bali', description: 'Una isla tropical paradisíaca', image: '', price: 1300, popularity: 5, visitRoutes: ['Ruta 1: Meditación', 'Ruta 2: Templos', 'Ruta 3: Playas'] },
            { id: 2, name: 'París', description: 'La ciudad del amor y la moda', image: '', price: 200, popularity: 4, visitRoutes: ['Ruta 1: Gastronomía', 'Ruta 2: Museos', 'Ruta 3: Monumentos'] },
            { id: 3, name: 'Nueva York', description: 'La ciudad que nunca duerme', image: '', price: 1500, popularity: 5, visitRoutes: ['Ruta 1: Monumentos', 'Ruta 2: Broadway', 'Ruta 3: Central Park'] },
            { id: 4, name: 'Porto', description: 'La ciudad de los puentes y el vino', image: '', price: 300, popularity: 3, visitRoutes: ['Ruta 1: Cata de Vinos', 'Ruta 2: Paseo por el río', 'Ruta 3: Centro Histórico'] },
        ];

        const { getByText, getAllByLabelText } = render(
            <MemoryRouter> 
                <DestinationsPage 
                    searchTerm={mockSearchTerm} 
                    setSearchTerm={mockSetSearchTerm} 
                    addToFavorites={mockAddToFavorites} 
                    destinations={mockDestinations} 
                />
            </MemoryRouter>
        );

        // Verifica que los destinos se rendericen en la página
        expect(getByText('Bali')).toBeInTheDocument();
        expect(getByText('París')).toBeInTheDocument();
        expect(getByText('Nueva York')).toBeInTheDocument();
        expect(getByText('Porto')).toBeInTheDocument();

        // Simula un clic en el icono de favoritos para el primer destino
        const favoriteIcons = getAllByLabelText('Agregar a favoritos'); // Obtener todos los iconos de favoritos
        fireEvent.click(favoriteIcons[0]); // Clic en el primer icono

        // Verifica que se llamó a la función mockAddToFavorites al hacer clic
        expect(mockAddToFavorites).toHaveBeenCalledTimes(1);
        // Verifica que se llame con el destino correcto
        expect(mockAddToFavorites).toHaveBeenCalledWith(mockDestinations[0]); // Aquí llamamos con el objeto del destino
    });
});