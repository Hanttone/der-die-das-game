import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useResetGame } from '../Services/Context';

import Navigation from '../Modules/Navigation/Navigation';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import Switch from '../Components/Switch/Switch';

export default function Home(props) {
  const history = useHistory();
  const resetGame = useResetGame();
  const [isToggled, setIsToggled] = useState(
    false
  );

  function changeMode() {
    if (props.mode === 'dark') {
      props.setMode('light');
      setIsToggled(!isToggled);
    } else {
      props.setMode('dark');
      setIsToggled(!isToggled);
    }
  }

  function handleClick() {
    resetGame(3, 0);
    history.push('/game');
  }

  return (
    <HomeWrapper>
      <Navigation mode={props.mode} />
      <Header mt="5vh" mb="4vh">
        Der, die & das
      </Header>
      <p>Want to practice the German nouns?</p>
      <p>
        Look no further, with this game you can
        practice over 100 000 German Nouns.
      </p>
      <p>
        Simply click on the play button and your
        game will start.
      </p>
      <p>You have 3 lives, have fun!</p>
      <Switch
        toggled={isToggled}
        onChange={changeMode}
        mode={props.mode}
      />
      <ButtonWrapper>
        <Button
          width="80%"
          radius="28px"
          text="Play"
          onPlayerClick={handleClick}
          data-cy="Play_button"
        />
      </ButtonWrapper>
      <WaveDesignBackground
        mode={props.mode}
        time="5s"
        height="100%"
        width="100%"
        data-cy="Background_element"
      />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  p {
    font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    font-size: 1.3rem;
    letter-spacing: 0.05rem;
    margin-bottom: 1vh;
    width: 80%;
    z-index: 2;
    line-height: 1.5;
  }
`;

const ButtonWrapper = styled.section`
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 8%;
  z-index: 1;
`;
