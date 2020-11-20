import styled from "styled-components/macro"
import Navigation from "../Components/Navigation/Navigation"
import Header from "../Components/Header/Header"
import BottomLayout from "../Components/BottomLayout/BottomLayout"

export default function Home () {

    return <HomeWrapper>
        <Navigation></Navigation>
        <Header>Der, die und das</Header>
        <BottomLayout></BottomLayout>
    </HomeWrapper>

}

const HomeWrapper = styled.main`
height: 100vh;
width: 100%;
`;