import Header from './Header';
import { render } from '@testing-library/react';

describe('Header for each page', () => {
  it('testing if header is displaying correct text', () => {
    const { getByText } = render(
      <Header>Welcome</Header>
    );
    getByText('Welcome');
  });
});
