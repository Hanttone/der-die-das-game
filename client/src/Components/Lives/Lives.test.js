import Lives from './Lives';
import { render } from '@testing-library/react';
import { GameUpdateProvider } from '../../Services/Context';

describe('Player Lives', () => {
  it('has an attribute mode', () => {
    const { container } = render(
      <GameUpdateProvider>
        <Lives mode="dark" />
      </GameUpdateProvider>
    );

    container
      .querySelector('section')
      .hasAttribute('mode');
  });
  it('Has childnodes of type SVG', () => {
    const { container } = render(
      <GameUpdateProvider>
        <Lives mode="dark" />
      </GameUpdateProvider>
    );

    container
      .querySelector('section')
      .hasChildNodes('svg');
  });
  it('The SVGs are of type green', () => {
    const { container } = render(
      <GameUpdateProvider>
        <Lives mode="dark" />
      </GameUpdateProvider>
    );

    const svg = container.querySelector('svg');

    expect(svg).toHaveTextContent(
      'heartGreen.svg'
    );
  });
  it('The SVGs are of type heartBlue', () => {
    const { container } = render(
      <GameUpdateProvider>
        <Lives mode="light" />
      </GameUpdateProvider>
    );

    const svg = container.querySelector('svg');

    expect(svg).toHaveTextContent(
      'heartBlue.svg'
    );
  });
});
