import styled from 'styled-components/macro';

import { ReactComponent as WaveDesign } from '../../Assets/waveDesign.svg';

export default function WaveDesignBackground() {
  return (
    <LayoutWrapper>
      <WaveDesign />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-items: flex-end;
`;
