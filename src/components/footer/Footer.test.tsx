import React from 'react';  
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import '@testing-library/jest-dom';

describe('Footer Component', () => {
    test('renders social media links', () => {
        render(<Footer />);
        const twitterLink = screen.getByRole('link', { name: /twitter/i });
        const facebookLink = screen.getByRole('link', { name: /facebook/i });
        const instagramLink = screen.getByRole('link', { name: /instagram/i });

        expect(twitterLink).toBeInTheDocument();
        expect(facebookLink).toBeInTheDocument();
        expect(instagramLink).toBeInTheDocument();
    });

    test('renders copyright text', () => {
        render(<Footer />);
        const copyrightText = screen.getByText(/© 2024 Viajes Ixa/i);
        expect(copyrightText).toBeInTheDocument();
    });
});
