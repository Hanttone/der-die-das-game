import { motion } from 'framer-motion';
import styled from 'styled-components/macro';

import WaveDesignBackground from 'Components/BottomLayout/WaveDesignBackground';
import LoadingIcon from 'Components/LoadingIcon/LoadingIcon';

export default function Loading({ mode }) {
  return (
    <LoadingWrapper>
      <section>
        <LoadingIcon />
      </section>
      <motion.p>Loading...</motion.p>
      <WaveDesignBackground mode={mode} />
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
    margin-bottom: 3vh;
  }
`;
