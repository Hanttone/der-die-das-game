import styled from 'styled-components/macro';
import { ReactComponent as Timer } from '../../Assets/timer.svg';

export default function TimerBar() {
  return (
    <TimerWrapper>
      <Timer></Timer>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  margin-bottom: 25px;
`;
