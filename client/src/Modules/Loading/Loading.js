import styled from 'styled-components/macro';

import WaveDesignBackground from '../../Components/BottomLayout/WaveDesignBackground';

export default function Loading() {
  return (
    <LoadingWrapper>
      <p>Loading</p>
      <WaveDesignBackground />
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
`;
