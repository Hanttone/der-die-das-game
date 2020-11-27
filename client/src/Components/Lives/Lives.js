import styled from 'styled-components/macro';
import { ReactComponent as Heart } from '../../Assets/heartGreen.svg';

export default function Lives({ livesLeft }) {
  let livesArray = [];

  switch (livesLeft) {
    case 3:
      livesArray = [1, 1, 1];
      break;
    case 2:
      livesArray = [1, 1];
      break;
    case 1:
      livesArray = [1];
      break;
    default:
      console.log('oops something went wrong');
  }

  return (
    <LivesWrapper>
      {livesArray.map((life, index) => (
        <Heart key={index} />
      ))}
    </LivesWrapper>
  );
}

const LivesWrapper = styled.section`
  width: 80%;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
