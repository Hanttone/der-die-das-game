import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const Header = styled.h1`
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  text-align: center;
`;

Header.propTypes = {
  mt: PropTypes.string,
  mb: PropTypes.string,
};

/* @component */
export default Header;
