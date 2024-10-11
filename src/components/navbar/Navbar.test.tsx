import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders Navbar with title', () => {
    render(<Navbar />);
    const titleElement = screen.getByText(/Navbar/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(<Navbar />);
    
    const homeLink = screen.getByText(/Home/i);
    const linkElement = screen.getByText(/Link/i);
    const dropdownElement = screen.getByText(/Dropdown/i);
    
    expect(homeLink).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
    expect(dropdownElement).toBeInTheDocument();
  });

  test('renders search input', () => {
    render(<Navbar />);
    const searchInput = screen.getByPlaceholderText(/Search/i);
    expect(searchInput).toBeInTheDocument();
  });
});