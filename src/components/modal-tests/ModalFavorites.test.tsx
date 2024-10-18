import React from 'react';
import { render, fireEvent } from '@testing-library/react'; 
import ModalFavorites from '../modals/ModalFavorites'; 
import '@testing-library/jest-dom';

describe('ModalFavorites', () => {
    it('debe mostrar los destinos favoritos', () => {
        // Mock de datos que cumplen con la interfaz Destination
        const favorites = [
            {
                id: 1,
                name: 'Destino 1',
                price: 100,
                description: 'Descripción del Destino 1',
                image: 'ruta/a/imagen1.jpg',
                popularity: 5,
                visitRoutes: ['Ruta 1', 'Ruta 2'],
            },
            {
                id: 2,
                name: 'Destino 2',
                price: 200,
                description: 'Descripción del Destino 2',
                image: 'ruta/a/imagen2.jpg',
                popularity: 10,
                visitRoutes: ['Ruta 3', 'Ruta 4'],
            },
        ];

        // Renderiza el modal con los destinos favoritos
        const { getByText } = render(
            <ModalFavorites 
                favorites={favorites} 
                onClose={() => {}} 
                isOpen={true} 
                onAddToFavorites={() => {}} 
            />
        );

        // Verifica que los destinos favoritos se muestren en el modal
        expect(getByText('Destino 1')).toBeInTheDocument();
        expect(getByText('Destino 2')).toBeInTheDocument();
    });

    it('debe abrir el modal cuando isOpen es true', () => {
        const { getByRole } = render(
            <ModalFavorites 
                favorites={[]} 
                onClose={() => {}} 
                isOpen={true} 
                onAddToFavorites={() => {}} 
            />
        );

        // Verifica que el modal esté visible
        const modal = getByRole('dialog'); // Asegúrate de que el modal tenga el rol dialog
        expect(modal).toBeVisible();
    });

    it('debe cerrar el modal al hacer clic en el botón de cerrar', () => {
        const mockOnClose = jest.fn();

        const { getByRole } = render(
            <ModalFavorites 
                favorites={[]} 
                onClose={mockOnClose} 
                isOpen={true} 
                onAddToFavorites={() => {}} 
            />
        );

        const closeButton = getByRole('button', { name: /cerrar/i }) || getByRole('button', { hidden: true });
        fireEvent.click(closeButton);
        
        // Verifica que la función mockOnClose se llama al hacer clic en el botón
        expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
});