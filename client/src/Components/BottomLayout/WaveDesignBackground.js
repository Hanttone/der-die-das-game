import styled from 'styled-components/macro';
import SVG from '../../Services/bottomDesignLayout';

export default function WaveDesignBackground() {
  return (
    <LayoutWrapper>
      <SVG width="100%" height="100%" />
    </LayoutWrapper>
  );
}

/*const HueRotate = keyframes`

0 % {
  filter: hue-rotate(0);
  transform: scale(1, 1)
}
15% {
   filter: hue-rotate(10deg);
   transform: scale(1, 1.01);
 }

 30% {
   filter: hue-rotate(20deg);
   transform: scale(1, 1.02);
 }

 45% { filter: hue-rotate(30deg);
  transform: scaleY(1, 1.03)}

 60% { filter: hue-rotate(20deg);
  transform: scaleY(1, 1.02)}

  75% { filter: hue-rotate(10deg);
  transform: scaleY(1, 1.01)}

 100% { filter: hue-rotate(0)
        transform: scaleY(1, 1);
 }
`;*/

const LayoutWrapper = styled.section`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  bottom: 0;
`;
