import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

import WaveDesignBackground from 'Components/BottomLayout/WaveDesignBackground';
import LoadingIcon from 'Components/LoadingIcon/LoadingIcon';

export default function Loading({ mode }) {
  const bounceTransition = {
    y: {
      duration: 0.5,
      yoyo: Infinity,
      ease: 'easeOut',
    },
  };

  return (
    <LoadingWrapper>
      <section>
        <LoadingIcon />
      </section>
      <LoadingText
        key="loading"
        transition={bounceTransition}
        animate={{
          y: ['100%', '-100%'],
        }}>
        Loading
      </LoadingText>
      <WaveDesignBackground
        mode={mode}
        animated="true"
      />
    </LoadingWrapper>
  );
}

const LoadingWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 3%;
    width: 100%;
    justify-content: center;
    margin-top: 30vh;
    margin-bottom: 10vh;
  }
`;

const LoadingText = styled(motion.p)`
  font-family: Silom;
  height: 3vh;
  z-index: 3;
`;
