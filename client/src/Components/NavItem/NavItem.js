import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavItem() {
  const navVariants = {
    initial: {
      opacity: 0,
      x: '44vw',
    },
    in: {
      opacity: 1,
      x: '44vw',
    },
    out: {
      opacity: 0,
      x: '44vw',
    },
  };

  const navTransition = {
    type: 'spring',
    ease: 'easeInOut',
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={navTransition}
      variants={navVariants}>
      <NavWrapper>
        <NavLinkStyled
          exact
          to="/"
          activeClassName="active">
          Home
        </NavLinkStyled>
        <NavLinkStyled
          to="/game"
          activeClassName="active">
          Game
        </NavLinkStyled>
        <NavLinkStyled
          to="/highscore"
          activeClassName="active">
          High Score
        </NavLinkStyled>
      </NavWrapper>
    </motion.div>
  );
}

const NavWrapper = styled.nav`
  height: 40vh;
  width: 56vw;
  grid-column: 2;
  grid-row: 1;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 28px 0px 28px 28px;
  display: flex;
  flex-direction: column;
  gap: 5%;
  justify-content: center;
  background-color: #32a19e;
  text-align: left;
  z-index: 14;
`;

const NavLinkStyled = styled(NavLink)`
  padding-left: 10%;
  font-size: 1.87rem;
  text-decoration: none;
  opacity: 0.5;

  &.active {
    opacity: 1;
  }
`;
