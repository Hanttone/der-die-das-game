import Lives from './Lives';
import {
  screen,
  render,
} from '@testing-library/react';

describe('Player lives component', () => {
  it('Displays Green lives when mode equals to dark', () => {
    render(<Lives mode="dark" />);
    expect(
      screen.queryAllByRole('img')
    ).toBeInDocument();
  });
});
