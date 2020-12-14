import styled from 'styled-components/macro';

export default function SwitchBtn({
  onChange,
  toggled,
  mode,
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

const SwitchWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  align-items: center;
  padding-left: 9%;
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 40px;
  height: 25px;
  border-radius: 50px;
  border: 2px solid
    ${(props) => props.theme.fontColor};
  position: relative;
  transition: 0.3s;
`;

const SwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 17px;
  height: 17px;
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
