import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function Button({
  width,
  radius,
  text,
}) {
  return (
    <>
      <ButtonStyled width={width} radius={radius}>
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
  height: 63px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
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
`;
