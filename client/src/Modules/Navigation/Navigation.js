import styled from 'styled-components/macro';
import { useState } from 'react';

import { ReactComponent as NavIconOpen } from '../../Assets/navIconOpen.svg';
import { ReactComponent as NavIconClose } from '../../Assets/navIconClose.svg';
import { ReactComponent as NavIconOpenLight } from '../../Assets/navIconOpenLight.svg';
import { ReactComponent as NavIconCloseLight } from '../../Assets/navIconCloseLight.svg';

import NavItem from '../../Components/NavItem/NavItem';

export default function Navigation({ mode }) {
  const [toggleNav, setToggleNav] = useState(
    true
  );

  function handleClick() {
    setToggleNav(!toggleNav);
  }

  function navigationMode() {
    if (toggleNav && mode === 'dark') {
      return (
        <NavIconOpenStyled
          onClick={handleClick}
        />
      );
    } else if (toggleNav && mode === 'light') {
      return (
        <NavIconOpenLightStyled
          onClick={handleClick}
        />
      );
    } else if (!toggleNav && mode === 'dark') {
      return (
        <NavIconCloseStyled
          onClick={handleClick}
        />
      );
    } else {
      return (
        <NavIconCloseLightStyled
          onClick={handleClick}
        />
      );
    }
  }

  return (
    <NavWrapper>
      {navigationMode()}
      {!toggleNav && (
        <NavItem navState={toggleNav} />
      )}
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  width: 100%;
  height: 6vh;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  z-index: 50;
`;

const NavIconOpenStyled = styled(NavIconOpen)`
  margin: 8%;
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
`;

const NavIconCloseStyled = styled(NavIconClose)`
  margin: 8%;
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
  z-index: 15;
`;

const NavIconOpenLightStyled = styled(
  NavIconOpenLight
)`
  margin: 8%;
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
`;

const NavIconCloseLightStyled = styled(
  NavIconCloseLight
)`
  margin: 8%;
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
  z-index: 15;
`;
