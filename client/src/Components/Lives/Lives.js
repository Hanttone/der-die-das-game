import styled from 'styled-components/macro';
import { useLife } from '../../Services/Context';

import { ReactComponent as HeartGreen } from '../../Assets/heartGreen.svg';
import { ReactComponent as LostGreenHeart } from '../../Assets/heartLost.svg';
import { ReactComponent as HeartBlue } from '../../Assets/heartBlue.svg';
import { ReactComponent as LostHeartBlue } from '../../Assets/heartLostBlue.svg';

export default function Lives({ mode }) {
  const life = useLife();
  let livesArray = [];
  let lostLivesArray = [];

  switch (life) {
    case 3:
      livesArray = [1, 1, 1];
      break;
    case 2:
      livesArray = [1, 1];
      lostLivesArray = [1];
      break;
    case 1:
      livesArray = [1];
      lostLivesArray = [1, 1];
      break;
    case 0:
      livesArray = [];
      lostLivesArray = [1, 1, 1];
      break;
    default:
      console.log('oops something went wrong');
  }

  const Heart =
    mode === 'dark' ? HeartGreen : HeartBlue;
  const LostHeart =
    mode === 'dark'
      ? LostGreenHeart
      : LostHeartBlue;

  return (
    <LivesWrapper>
      {livesArray.map((life, index) => (
        <Heart key={index} />
      ))}
      {lostLivesArray.map((lostlife, index) => (
        <LostHeart key={index} />
      ))}
    </LivesWrapper>
  );
}

const LivesWrapper = styled.section`
  width: 80%;
  margin-bottom: 3vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
