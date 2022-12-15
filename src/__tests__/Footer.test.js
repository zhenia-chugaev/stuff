import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

it('renders quote author', () => {
  render(<Footer />);
  const quoteAuthor = screen.getByText(/Albert Camus/i);
  expect(quoteAuthor).toBeInTheDocument();
});