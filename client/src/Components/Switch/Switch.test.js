import Switch from './Switch';
import {
  render,
  fireEvent,
} from '@testing-library/react';

describe('Test Switch', () => {
  it('Fires a function on change', () => {
    const onChange = jest.fn();
    const { container } = render(
      <Switch onChange={onChange} />
    );

    const SwitchInput = container.querySelector(
      'input'
    );

    fireEvent.click(SwitchInput);
    expect(onChange).toHaveBeenCalled();
  });
});
