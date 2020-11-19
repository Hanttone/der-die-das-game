import Navigation from "../Components/Navigation";
import BottomLayout from "../Components/BottomLayout";
import styled from "styled-components/macro";

export default function GamePage () {

    return <GameWrapper>
        <Navigation></Navigation>
        <BottomLayout></BottomLayout>
    </GameWrapper>
}

const GameWrapper = styled.main`
height: 100vh;
width: 100%;
`;