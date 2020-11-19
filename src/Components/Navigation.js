import styled from "styled-components/macro"
import {ReactComponent as NavIcon} from "../Assets/navIcon.svg"
import { useState } from "react"

export default function Navigation () {

    const [toggleNav, setToggleNav] = useState(true)

    function handleClick() {
        setToggleNav(!toggleNav)
    }


    return <NavWrapper>
        <NavIcon onClick={handleClick}></NavIcon>
    </NavWrapper>
}

const NavWrapper = styled.nav`
width: 100%;
padding: 3vh 5%;
text-align: right;
`;