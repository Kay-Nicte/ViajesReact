import React from 'react'; // 
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar'; 

describe('Navbar Component', () => {
    test('renders Navbar with title', () => {
        render(<Navbar />);
        const navbarElement = screen.getByText(/viajes ixa/i);
        expect(navbarElement).toBeInTheDocument();
    });

    test('renders nav links', () => {
        render(<Navbar />);
        const homeLink = screen.getByText(/inicio/i);
        const dropdownLink = screen.getByText(/destinos/i);
        expect(homeLink).toBeInTheDocument();
        expect(dropdownLink).toBeInTheDocument();
    });

    test('renders search input', () => {
        render(<Navbar />);
        const searchInput = screen.getByPlaceholderText(/destinos/i);
        expect(searchInput).toBeInTheDocument();
    });
    
    test('renders the collapse button', () => {
        render(<Navbar />);
        const collapseButton = screen.getByRole('button', { name: /toggle navigation/i });
        expect(collapseButton).toBeInTheDocument();
    });
});
