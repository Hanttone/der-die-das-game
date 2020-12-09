import styled from 'styled-components/macro';
import { ReactComponent as NavIconOpen } from '../../Assets/navIconOpen.svg';
import { ReactComponent as NavIconClose } from '../../Assets/navIconClose.svg';
import { useState } from 'react';
import { motion } from 'framer-motion';

import NavItem from '../NavItem/NavItem';

export default function Navigation() {
  const [toggleNav, setToggleNav] = useState(
    true
  );

  function handleClick() {
    setToggleNav(!toggleNav);
  }

  return (
    <NavWrapper>
      {toggleNav ? (
        <NavIconOpenStyled
          onClick={handleClick}
        />
      ) : (
        <NavIconCloseStyled
          onClick={handleClick}
        />
      )}
      {!toggleNav && <NavItem />}
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  width: 100%;
  height: 6vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: end;
  align-items: start;
  text-align: right;
  z-index: 10;
`;

const NavIconOpenStyled = styled(NavIconOpen)`
  margin: 8%;
  grid-column: 2;
  justify-self: end;
`;

const NavIconCloseStyled = styled(NavIconClose)`
  margin: 8%;
  grid-column: 2;
  grid-row: 1;
  justify-self: end;
  z-index: 15;
`;
