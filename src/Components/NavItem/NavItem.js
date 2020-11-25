import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export default function NavItem() {
  /*<NavLinkStyled to="/settings" activeClassName="active">Settings</NavLinkStyled> */

  return (
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
  );
}

const NavWrapper = styled.nav`
  height: 299px;
  width: 211px;
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
  opacity: 1;

  &.active {
    opacity: 0.5;
  }
`;
