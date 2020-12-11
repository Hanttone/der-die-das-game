import styled from 'styled-components/macro';
import { ReactComponent as Heart } from '../../Assets/heartGreen.svg';
import { ReactComponent as LostHeart } from '../../Assets/heartLost.svg';
import { ReactComponent as HeartBlue } from '../../Assets/heartBlue.svg';
import { ReactComponent as LostHeartBlue } from '../../Assets/heartLostBlue.svg';
import { useLife } from '../../Services/Context';

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

  return (
    <LivesWrapper>
      {mode === 'dark'
        ? livesArray.map((life, index) => (
            <Heart key={index} />
          ))
        : livesArray.map((life, index) => (
            <HeartBlue key={index} />
          ))}
      {mode === 'dark'
        ? lostLivesArray.map(
            (lostlife, index) => (
              <LostHeart key={index} />
            )
          )
        : lostLivesArray.map(
            (lostlife, index) => (
              <LostHeartBlue key={index} />
            )
          )}
    </LivesWrapper>
  );
}

const LivesWrapper = styled.section`
  width: 80%;
  margin-bottom: 3vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
