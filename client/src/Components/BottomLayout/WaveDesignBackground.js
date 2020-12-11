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

const LayoutWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  bottom: 0;
`;
