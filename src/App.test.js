import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navbar home link ', () => {
  render(<App />);
  const homeElement = screen.getByText(/home/i)
  expect(homeElement).toBeInTheDocument();
});