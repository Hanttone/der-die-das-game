import styled from 'styled-components/macro';

import SVG from '../../Services/bottomDesignLayout';
import LightSVG from '../../Services/bottomDesignLightLayout';

export default function WaveDesignBackground({
  mode,
}) {
  return (
    <LayoutWrapper>
      {mode === 'dark' ? (
        <SVG width="100%" height="100%" />
      ) : (
        <LightSVG width="100%" height="100%" />
      )}
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.span`
  max-width: 800px;
  min-width: 360px;
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;
