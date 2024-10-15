import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'; 

describe('Navbar Component', () => {
    const mockOnSearch = jest.fn(); // Crea una función mock para onSearch

    test('renders Navbar with title', () => {
        render(<Navbar onSearch={mockOnSearch} />); // Pasa la función mock como prop
        const navbarElement = screen.getByText(/viajes ixa/i);
        expect(navbarElement).toBeInTheDocument();
    });

    test('renders nav links', () => {
        render(<Navbar onSearch={mockOnSearch} />); // Pasa la función mock como prop
        const homeLink = screen.getByText(/inicio/i);
        const dropdownLink = screen.getByText(/destinos/i);
        expect(homeLink).toBeInTheDocument();
        expect(dropdownLink).toBeInTheDocument();
    });

    test('renders search input', () => {
        render(<Navbar onSearch={mockOnSearch} />); // Pasa la función mock como prop
        const searchInput = screen.getByPlaceholderText(/buscar destinos/i); // Asegúrate de que coincida con el placeholder real
        expect(searchInput).toBeInTheDocument();
    });
    
    test('renders the collapse button', () => {
        render(<Navbar onSearch={mockOnSearch} />); // Pasa la función mock como prop
        const collapseButton = screen.getByRole('button', { name: /toggle navigation/i }); // Asegúrate de que el nombre coincida con el botón en tu Navbar
        expect(collapseButton).toBeInTheDocument();
    });
});