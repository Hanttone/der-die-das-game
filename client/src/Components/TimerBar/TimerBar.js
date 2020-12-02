import styled from 'styled-components/macro';
import { ReactComponent as Timer } from '../../Assets/timer.svg';

export default function TimerBar() {
  return (
    <TimerWrapper>
      <div>
        <Timer></Timer>
      </div>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  margin-bottom: 25px;

  div {
  }
`;
