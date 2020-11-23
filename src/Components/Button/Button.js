import styled from 'styled-components/macro';

export default function Button({
  width,
  radius,
  text,
  row,
  column,
}) {
  return (
    <>
      <ButtonStyled
        width={width}
        radius={radius}
        row={row}
        column={column}>
        {text}
      </ButtonStyled>
    </>
  );
}

const ButtonStyled = styled.button`
  width: ${(props) => props.width};
  height: 8vh;
  border-radius: ${(props) => props.radius};
  background-image: linear-gradient(
    40deg,
    #6c24b4,
    #a626b7,
    #b12dc3,
    #dc45f0
  );
  font-size: 1.78rem;
  color: white;
  border: none;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  grid-row: ${(props) => props.row};
`;
