import styled from 'styled-components/macro';
import { ReactComponent as Heart } from '../../Assets/heartGreen.svg';

export default function Lives() {
  return (
    <LivesWrapper>
      <Heart></Heart>
      <Heart></Heart>
      <Heart></Heart>
    </LivesWrapper>
  );
}

const LivesWrapper = styled.section`
  width: 80%;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
