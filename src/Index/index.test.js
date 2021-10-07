import { render, screen } from '@testing-library/react';
import App from './index';

describe('App', () => {
 it('renders without crashing', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
  //   render(<App />);
  //   expect(screen.getByTestId('my-test-id')).toHaveTextContent('Welcome');
 });
});
