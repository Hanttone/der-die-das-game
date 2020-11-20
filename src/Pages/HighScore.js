import Navigation from "../Components/Navigation/Navigation";
import BottomLayout from "../Components/BottomLayout/BottomLayout";
import styled from "styled-components/macro";
import Header from "../Components/Header/Header"

export default function HighScore () {

    return <HighScoreWrapper>
        <Navigation></Navigation>
        <Header>High Score</Header>
        <BottomLayout></BottomLayout>
    </HighScoreWrapper>

}

const HighScoreWrapper = styled.main`
height: 100vh;
width: 100%;
`;