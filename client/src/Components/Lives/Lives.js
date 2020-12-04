import styled from 'styled-components/macro';
import { ReactComponent as Heart } from '../../Assets/heartGreen.svg';
import { ReactComponent as LostHeart } from '../../Assets/heartLost.svg';
import { useLife } from '../../Services/Context';

export default function Lives() {
  const life = useLife();
  console.log(life);
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
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
