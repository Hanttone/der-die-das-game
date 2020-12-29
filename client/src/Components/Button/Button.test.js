import Button from './Button';
import {
  render,
  fireEvent,
} from '@testing-library/react';

describe('Button', () => {
  it('fires a function once on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <Button
        onPlayerClick={onClick}
        text="Play"
      />
    );

    fireEvent.click(getByText('Play'));
    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it('is displaying text correctly', () => {
    const { getByText } = render(
      <Button text="Play" />
    );
    getByText('Play');
  });
  it('has a disabled attribute and the button is disabled when having the value true', () => {
    const { getByText } = render(
      <Button text="Play" disabled={true} />
    );
    getByText('Play').hasAttribute('disabled');
    expect(
      getByText('Play').hasAttribute('disabled')
    ).toBeTruthy();
  });
});
