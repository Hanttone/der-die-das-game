import styled from "styled-components/macro";

import Navigation from "../Components/Navigation/Navigation";
import BottomLayout from "../Components/BottomLayout/BottomLayout";
import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";



export default function GamePage () {

    return <GameWrapper>
                <Navigation></Navigation>
                <Header>Game</Header>
                <ButtonWrapper>
                    <Button width="100%" radius="20px" text="Der"></Button>
                    <Button width="100%" radius="20px" text="Die"></Button>
                    <Button width="100%" radius="20px" text="Das" row="5"></Button>
                </ButtonWrapper>
                <BottomLayout></BottomLayout>
            </GameWrapper>
}

const GameWrapper = styled.main`
height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

const ButtonWrapper = styled.div`
width: 80%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 3%;
`;