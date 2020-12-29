import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import SVG from '../../Services/bottomDesignLayout';
import LightSVG from '../../Services/bottomDesignLightLayout';

export default function WaveDesignBackground({
  mode,
  animated,
}) {
  const WaveBackground =
    mode === 'dark' ? SVG : LightSVG;

  return (
    <LayoutWrapper>
      <WaveBackground
        width="100%"
        height="100%"
        animated={animated}
      />
    </LayoutWrapper>
  );
}

WaveDesignBackground.propTypes = {
  mode: PropTypes.string,
};

const LayoutWrapper = styled.span`
  width: 100%;
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: flex-end;
  overflow: hidden;
`;
