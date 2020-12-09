import styled from 'styled-components/macro';
import { useEffect, useRef } from 'react';
import {
  useCounter,
  useSetCounter,
} from '../../Services/Context';
import { motion } from 'framer-motion';

export default function TimerBar({ word }) {
  const counter = useCounter();
  const setCounter = useSetCounter();
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  useEffect(() => {
    setCounter(15);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [word]);

  return (
    <TimerWrapper>
      <div>
        <motion.div
          animate={{
            width: `${counter * 21}px`,
            backgroundImage:
              'linear-gradient(-45deg, #d933f0,#a429b4,#9425a3)',
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}></motion.div>
      </div>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  margin-bottom: 25px;

  div {
    width: 315px;
    height: 11px;
    background-color: rgba(192, 192, 192, 0.3);
    border-radius: 5px;
  }

  section {
    width: ${(props) => props.width + 'px'};
    height: 11px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;
