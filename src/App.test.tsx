import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('should render', () => {
  render(<App />);
  const linkElement = screen.getByText(/Roman numerals for kids/i);
  expect(linkElement).toBeInTheDocument();
});
