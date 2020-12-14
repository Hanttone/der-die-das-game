import Header from './Header';
import {
  render,
  screen,
} from '@testing-library/react';

describe('Header for each page', () => {
  it('testing if header is displaying correct text', () => {
    render(<Header>Welcome</Header>);
    expect(
      screen.getByText('Welcome')
    ).toBeInTheDocument();
  });
});
