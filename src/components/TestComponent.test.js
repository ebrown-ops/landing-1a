import React from 'react';
import { render, screen } from '@testing-library/react';
import TestComponent from './TestComponent';

describe('TestComponent', () => {
  it('renders without crashing', () => {
    render(<TestComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });

  it('contains a button', () => {
    render(<TestComponent />);
    expect(screen.getByRole('button', { name: 'Test Button' })).toBeInTheDocument();
  });
});