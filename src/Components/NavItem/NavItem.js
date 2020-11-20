import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";


export default function NavItem() {

    /*<NavLinkStyled to="/settings" activeClassName="active">Settings</NavLinkStyled> */

    return <NavWrapper>
        <NavLinkStyled exact to="/" activeClassName="active">Home</NavLinkStyled>
        <NavLinkStyled to="/game" activeClassName="active">Game</NavLinkStyled>
        <NavLinkStyled to="/highscore" activeClassName="active">High Score</NavLinkStyled>
    </NavWrapper>
}

const NavWrapper = styled.nav`
height: 40vh;
background-color: #32A19E;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
grid-column: 2;
grid-row: 1;
z-index: 14;
border-radius: 28px 0px 28px 28px;
text-align: left;
display: flex;
flex-direction: column;
gap: 5%;
justify-content: center;
`;

const NavLinkStyled = styled(NavLink)`
font-size: 1.87rem;
color: white;
text-decoration: none;
opacity: 1;
padding-left: 10%;

&.active {
    opacity: 0.5;
}
`;

