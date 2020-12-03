import styled from 'styled-components/macro';
import {
  useEffect,
  useState,
  useRef,
} from 'react';

export default function TimerBar({ word }) {
  const [counter, setCounter] = useState(15);
  const timer = useRef();

  function setTimer() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  useEffect(() => {
    timer.current = setTimeout(
      () => setTimer(),
      1000
    );
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [counter]);

  useEffect(() => {
    setCounter(15);
  }, [word]);

  return (
    <TimerWrapper width={counter * 21}>
      <div>
        <section></section>
      </div>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  margin-bottom: 25px;

  div {
    width: 315px;
    height: 11px;
    background-color: grey;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  section {
    width: ${(props) => props.width + 'px'};
    height: 11px;
    background-image: linear-gradient(
      -45deg,
      #d933f0,
      #a429b4,
      #9425a3
    );
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;
