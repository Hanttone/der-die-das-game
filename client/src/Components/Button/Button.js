import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function Button({
  width,
  radius,
  text,
  onPlayerClick,
  disabled,
}) {
  return (
    <>
      <ButtonStyled
        onClick={onPlayerClick}
        width={width}
        radius={radius}
        disabled={disabled}>
        {text}
      </ButtonStyled>
    </>
  );
}

Button.propTypes = {
  width: PropTypes.string,
  radius: PropTypes.string,
  text: PropTypes.string,
};

const ButtonStyled = styled.button`
  width: ${(props) => props.width};
  height: 8.5vh;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  border-radius: ${(props) => props.radius};
  border: none;
  background-image: linear-gradient(
    40deg,
    #6c24b4 15%,
    #a626b7,
    #b12dc3,
    #dc45f0
  );
  font-size: 1.78rem;
  outline: none;
`;
