import React from 'react';
import { render, screen } from '@testing-library/react';
import Destinations from './Destinations';

describe('Destinations Component', () => {
    test('renders the title', () => {
        render(<Destinations />);
        const titleElement = screen.getByText(/hello, this is destinations!/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the main container', () => {
        render(<Destinations />);
        const containerElement = screen.getByRole('heading', { name: /hello, this is destinations!/i });
        expect(containerElement).toBeInTheDocument();
    });

});