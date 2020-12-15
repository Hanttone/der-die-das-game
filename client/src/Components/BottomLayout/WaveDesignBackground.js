import styled from 'styled-components/macro';
import SVG from '../../Services/bottomDesignLayout';

export default function WaveDesignBackground() {
  return (
    <LayoutWrapper>
      <SVG width="100%" height="100%" />
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.section`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  bottom: 0;
`;
