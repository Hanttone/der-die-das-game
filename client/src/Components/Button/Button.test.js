import Button from './Button';
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';

describe('Testing button click', () => {
  it('Fires a function on click', () => {
    const onPlayerClick = jest.fn();
    const { getByText } = render(
      <Button
        onPlayerClick={onPlayerClick}
        text="Play"
      />
    );

    fireEvent.click(getByText('Play'));
    expect(onPlayerClick).toHaveBeenCalled();
  });
  it('The button displays text correctly', () => {
    const onPlayerClick = jest.fn();
    render(
      <Button
        onPlayerClick={onPlayerClick}
        text="Play"
      />
    );
    const text = screen.getByText('Play');
    expect(text).toHaveTextContent('Play');
  });
});
