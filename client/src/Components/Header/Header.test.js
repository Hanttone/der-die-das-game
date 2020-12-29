import Header from './Header';
import { render } from '@testing-library/react';

describe('Header', () => {
  it('testing if header is displaying correct text', () => {
    const { getByText } = render(
      <Header>Welcome</Header>
    );
    getByText('Welcome');
  });
});
