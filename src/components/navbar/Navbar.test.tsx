import React from 'react'; 
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Navbar from './Navbar'; 
import { Destination } from 'c:/Proyectos/viajes-react/src/interface-models/interfaceDestination';

describe('Navbar Component', () => {
    const mockOnSearch = jest.fn(); // Crea un mock para la función onSearch
    const mockAddToFavorites = jest.fn(); // Crea un mock para la función addToFavorites
    const mockFavorites: Destination[] = [ // Crea un mock que coincida con el tipo Destination
        {
            id: 1,
            name: 'Destino 1',
            price: 100,
            visitRoutes: ['Ruta 1', 'Ruta 2'],
            description: 'Descripción del destino 1',
            image: 'ruta/a/la/imagen1.jpg',
            popularity: 5, // Ajusta este valor según lo que necesites
        },
        // Agrega más destinos según sea necesario
    ];

    test('renders Navbar with title', () => {
        render(
            <MemoryRouter>
                <Navbar onSearch={mockOnSearch} addToFavorites={mockAddToFavorites} favorites={mockFavorites} />
            </MemoryRouter>
        ); // Pasa la función mock como prop
        const navbarElement = screen.getByText(/viajes ixa/i);
        expect(navbarElement).toBeInTheDocument();
    });

    test('renders nav links', () => {
        render(
            <MemoryRouter>
                <Navbar onSearch={mockOnSearch} addToFavorites={mockAddToFavorites} favorites={mockFavorites} />
            </MemoryRouter>
        );
        const dropdownLink = screen.getByText(/destinos/i);
        expect(dropdownLink).toBeInTheDocument();
    });

    test('renders search input', () => {
        render(
            <MemoryRouter>
                <Navbar onSearch={mockOnSearch} addToFavorites={mockAddToFavorites} favorites={mockFavorites} />
            </MemoryRouter>
        );
        // Actualiza aquí para buscar el placeholder correcto
        const searchInput = screen.getByPlaceholderText(/destinos/i);
        expect(searchInput).toBeInTheDocument();
    });

    test('renders the collapse button', () => {
        render(
            <MemoryRouter>
                <Navbar onSearch={mockOnSearch} addToFavorites={mockAddToFavorites} favorites={mockFavorites} />
            </MemoryRouter>
        );

        const collapseButton = screen.getByRole('button', { name: /toggle navigation/i });
        expect(collapseButton).toBeInTheDocument();
    });
});