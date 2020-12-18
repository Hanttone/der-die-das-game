import Switch from './Switch';
import {
  render,
  fireEvent,
} from '@testing-library/react';

describe('Switch', () => {
  it('fires a function on change', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Switch onChange={onChange} />
    );

    const SwitchInput = container.querySelector(
      'input'
    );

    fireEvent.click(SwitchInput);
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('is changing checked states when clicked on', () => {
    const { container } = render(<Switch />);
    const checkboxInput = container.querySelector(
      'input'
    );
    expect(checkboxInput.checked).toEqual(false);
    fireEvent.click(checkboxInput);
    expect(checkboxInput.checked).toEqual(true);
    fireEvent.click(checkboxInput);
    expect(checkboxInput.checked).toEqual(false);
  });
});
