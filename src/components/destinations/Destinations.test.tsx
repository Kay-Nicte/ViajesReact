import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Destinations from './Destinations';

describe('Destinations Component', () => {
  it('should render the Destinations component without crashing', () => {
    render(<Destinations />);
    expect(screen.getByText('Nuestros Destinos Populares')).toBeInTheDocument();
  });

  it('should display the popular destinations carousel', () => {
    render(<Destinations />);
    const destinationNames = ['Bali', 'París', 'Nueva York'];
    destinationNames.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('should toggle description when "Leer más" is clicked', () => {
    render(<Destinations />);
    const linkElement = screen.getAllByText('Leer más')[0];
    expect(linkElement).toBeInTheDocument();

    // Simulate a click to expand the description
    fireEvent.click(linkElement);
    expect(linkElement.textContent).toBe('Leer menos');

    // Simulate another click to collapse the description
    fireEvent.click(linkElement);
    expect(linkElement.textContent).toBe('Leer más');
  });

  it('should render the correct number of description cards', () => {
    render(<Destinations />);
    const cardElements = screen.getAllByRole('heading', { level: 5 });
    expect(cardElements.length).toBe(3); // Verifica que haya 3 tarjetas de descripción
  });
});