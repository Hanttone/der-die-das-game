/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components/macro';
import { useEffect, useRef } from 'react';
import {
  useCounter,
  useSetCounter,
} from 'Services/Context';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

export default function TimerBar({ word }) {
  const countDown = useCounter();
  const setCounter = useSetCounter();
  const timer = useRef();

  function setTimer() {
    if (countDown > 0) {
      setCounter(countDown - 1);
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
  }, [countDown]);

  useEffect(() => {
    setCounter(15);
  }, [word]);

  return (
    <TimerWrapper>
      <div>
        <motion.div
          animate={{
            width: `${countDown * 21}px`,
            backgroundImage:
              'linear-gradient(-45deg ,#a429b4,#9425a3, #6C24B4)',
          }}
          transition={{
            ease: 'easeInOut',
            duration: 0.5,
          }}
        />
      </div>
    </TimerWrapper>
  );
}

TimerBar.propTypes = {
  word: PropTypes.string,
};

const TimerWrapper = styled.div`
  margin-bottom: 4vh;
  z-index: 20;

  div {
    width: 345px;
    height: 1.2vh;
    background-color: rgba(192, 192, 192, 0.3);
    border-radius: 5px;
  }
`;
