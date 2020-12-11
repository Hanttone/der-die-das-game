import styled from 'styled-components/macro';
import { useHistory } from 'react-router-dom';

import Navigation from '../Modules/Navigation/Navigation';
import Header from '../Components/Header/Header';
import WaveDesignBackground from '../Components/BottomLayout/WaveDesignBackground';
import Button from '../Components/Button/Button';
import Switch from 'react-input-switch';

export default function Home(props) {
  const history = useHistory();

  function changeMode() {
    if (props.mode === 'dark') {
      props.setMode('light');
    } else {
      props.setMode('dark');
    }
  }

  function handleClick() {
    history.push('/game');
  }

  return (
    <HomeWrapper>
      <Switch
        off="dark"
        on="light"
        value={props.mode}
        onChange={changeMode}
        styles={{
          track: {
            backgroundColor: 'grey',
            scale: '1.5',
            zIndex: '50',
          },
          trackChecked: {
            backgroundColor: '#38CCE0',
            scale: '1.5',
            zIndex: '50',
          },
          button: {
            backgroundColor: 'white',
            scale: '1.5',
            zIndex: '50',
          },
          buttonChecked: {
            backgroundColor: 'white',
            scale: '1.5',
            zIndex: '50',
          },
        }}
      />
      <Navigation />
      <Header mt="8vh" mb="6vh">
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

      <ButtonWrapper>
        <Button
          width="80%"
          radius="28px"
          text="Play"
          onPlayerClick={handleClick}
        />
      </ButtonWrapper>
      <WaveDesignBackground mode={props.mode} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
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
    margin-bottom: 2vh;
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
