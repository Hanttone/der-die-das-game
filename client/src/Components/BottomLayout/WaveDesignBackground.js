import styled, {
  keyframes,
} from 'styled-components/macro';
import { ReactComponent as WaveDesign } from '../../Assets/waveDesign.svg';

export default function WaveDesignBackground() {
  return (
    <LayoutWrapper>
      <WaveDesign />
    </LayoutWrapper>
  );
}

const HueRotate = keyframes`

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
  transform: scale(1, 1.03)}

 60% { filter: hue-rotate(20deg);
  transform: scale(1, 1.02)}

  75% { filter: hue-rotate(10deg);
  transform: scale(1, 1.01)}

 100% { filter: hue-rotate(0)
        transform: scale(1, 1);
 }
`;

const LayoutWrapper = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-items: flex-end;
  animation: ${HueRotate} 10s infinite; ;
`;
