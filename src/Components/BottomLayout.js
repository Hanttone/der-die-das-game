import {ReactComponent as Blue} from "../Assets/blueWave.svg"
import {ReactComponent as Lightgreen} from "../Assets/greenFaded.svg"
import {ReactComponent as Green} from "../Assets/greenWave.svg"
import {ReactComponent as Lightpurple} from "../Assets/purpleFaded.svg"
import {ReactComponent as Purple} from "../Assets/purpleStrong.svg"
import styled from "styled-components/macro";

export default function BottomLayout () {

    return <LayoutWrapper>
        <BlueWave></BlueWave>
        <GreenFaded></GreenFaded>
        <GreenStrong></GreenStrong>
        <PurpleFaded></PurpleFaded>
        <PurpleStrong></PurpleStrong>
    </LayoutWrapper>
}

const LayoutWrapper = styled.section`
width: 100%;
height: 100vh;
position: relative;
overflow: hidden;
z-index: 0;
`;

const BlueWave = styled(Blue)`
position: absolute;
bottom: 0;
z-index: 3;
`;

const GreenFaded = styled(Lightgreen)`
position: absolute;
bottom: 0;
z-index: 4;
`;

const GreenStrong = styled(Green)`
position: absolute;
bottom: 0;
z-index: 5;
`;

const PurpleFaded = styled(Lightpurple)`
position: absolute;
bottom: -1%;
z-index: 1;
`;

const PurpleStrong = styled(Purple)`
position: absolute;
bottom: 0;
z-index: 2;
`;
