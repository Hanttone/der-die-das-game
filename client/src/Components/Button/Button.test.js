import Button from './Button';
import {
  render,
  fireEvent,
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
    const { getByText } = render(
      <Button text="Play" />
    );
    getByText('Play');
  });
  it('Has disabled attribute', () => {
    const { getByText } = render(
      <Button text="Play" disabled />
    );
    getByText('Play').hasAttribute('disabled');
  });
});
