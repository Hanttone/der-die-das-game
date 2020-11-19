import styled from "styled-components/macro"
import {ReactComponent as NavIconOpen} from "../Assets/navIconOpen.svg"
import {ReactComponent as NavIconClose} from "../Assets/navIconClose.svg"
import { useState } from "react"

export default function Navigation () {

    const [toggleNav, setToggleNav] = useState(true)

    function handleClick() {
        setToggleNav(!toggleNav)
    }


    return <NavWrapper>
       { toggleNav ? <NavIconOpen onClick={handleClick}></NavIconOpen> : <NavIconClose onClick={handleClick}></NavIconClose>}
    </NavWrapper>
}

const NavWrapper = styled.nav`
width: 100%;
height: 11vh;
padding: 3vh 5%;
text-align: right;
`;