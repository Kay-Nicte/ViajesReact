import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
    test('renders social media links', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const twitterLink = screen.getByRole('link', { name: /twitter/i });
        const facebookLink = screen.getByRole('link', { name: /facebook/i });
        const instagramLink = screen.getByRole('link', { name: /instagram/i });

        expect(twitterLink).toBeInTheDocument();
        expect(facebookLink).toBeInTheDocument();
        expect(instagramLink).toBeInTheDocument();
    });

    test('renders copyright text', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const copyrightText = screen.getByText(/© 2024 Viajes Ixa/i);
        expect(copyrightText).toBeInTheDocument();
    });

    // Test adicional: Verificar que los enlaces redirijan correctamente
    test('social media links redirect to correct URLs', () => {
        render(
            <MemoryRouter>
                <Footer />
            </MemoryRouter>
        );

        const twitterLink = screen.getByRole('link', { name: /twitter/i });
        const facebookLink = screen.getByRole('link', { name: /facebook/i });
        const instagramLink = screen.getByRole('link', { name: /instagram/i });

        expect(twitterLink).toHaveAttribute('href', 'https://www.twitter.com'); 
        expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com');
        expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com');
    });
});