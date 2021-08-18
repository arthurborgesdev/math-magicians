import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import App from '../../App';

describe('App', () => {
  test('renders App component and verify that is in homepage', () => {
    render(<App />);
    screen.getByText('Welcome to our page!');
  });

  test('Change page to Calculator and check', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Calculator'));

    screen.getByText("Let's do some math!");
  });

  test('Change page to Quote and check', () => {
    render(<App />);

    fireEvent.click(screen.getByText('Quote'));

    const quoteText = 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston';
    screen.getByText(quoteText);
  });
});
