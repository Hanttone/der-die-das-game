import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function Switch({
  onChange,
  toggled,
}) {
  return (
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        checked={toggled}
        onChange={onChange}
        id="modeSwitch"
      />
      <SwitchLabel htmlFor="modeSwitch">
        <SwitchButton />
      </SwitchLabel>
      <span>Change mode</span>
    </SwitchWrapper>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

const SwitchWrapper = styled.div`
  height: 5vh;
  width: 100%;

  display: flex;

  margin-top: 3vh;
  padding-left: 9%;

  align-items: center;
  z-index: 15;

  span {
    margin: 0;
    padding-left: 3%;
    font-size: 1.3rem;
  }
`;

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  width: 40px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  border-radius: 50px;
  border: 2px solid
    ${(props) => props.theme.fontColor};
  position: relative;
  transition: 0.3s;
`;

const SwitchButton = styled.span`
  width: 17px;
  height: 17px;

  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 45px;
  transition: 0.3s;

  background: ${(props) => props.theme.fontColor};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;
