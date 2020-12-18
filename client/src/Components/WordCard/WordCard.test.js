import WordCard from './WordCard';
import { render } from '@testing-library/react';

describe('WordCard', () => {
  it('is showing P-tag text', () => {
    const { getByText } = render(
      <WordCard text="The correct answer is" />
    );
    expect(
      getByText('The correct answer is')
    ).toBeTruthy();
  });
  it('is showing h2-tag text', () => {
    const { getByText } = render(
      <WordCard word="Stuhl" />
    );

    expect(getByText('Stuhl')).toBeTruthy();
  });
  it('has a section with children nodes', () => {
    const { container } = render(<WordCard />);
    const selector = container
      .querySelector('section')
      .hasChildNodes();
    expect(selector).toBeTruthy();
  });
  it('has a section with a class attribute', () => {
    const { container } = render(<WordCard />);
    const selector = container.querySelector(
      'section'
    );
    expect(selector).toHaveAttribute('class');
  });
});
