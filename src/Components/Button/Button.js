import styled from "styled-components/macro";

export default function Button({width, radius, text}) {
    
    return <>
    <ButtonStyled width={width} radius={radius}>{text}</ButtonStyled>
    </>
}

const ButtonStyled = styled.button`
width: ${props => props.width};
height: 8vh;
border-radius: ${props => props.radius};
background-image: linear-gradient(40deg, #6C24B4,#A626B7,#B12DC3, #DC45F0);
font-size: 1.78rem;
color: white;
border: none;
box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
`;