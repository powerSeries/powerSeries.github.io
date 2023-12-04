import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders app, check home link ', () => {
  render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );
  const homeNavElement = screen.getByRole('link', {name: /home/i});
  expect(homeNavElement).toBeInTheDocument();
})

test('renders app, check contact link ', () => {
  render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );
  const contactNavElement = screen.getByRole('link', {name: /contact/i});
  expect(contactNavElement).toBeInTheDocument();
});

test('renders app, check project link', () => {
  render(
    <MemoryRouter>
      <App/>
    </MemoryRouter>
  );
  const projectNavElement = screen.getByRole('link', {name: /project/i});
  expect(projectNavElement).toBeInTheDocument();
})