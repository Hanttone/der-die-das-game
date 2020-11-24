import styled from 'styled-components/macro';
import { ReactComponent as BottomDesign } from '../../Assets/bottomDesign.svg';

export default function BottomLayout() {
  return (
    <LayoutWrapper>
      <BottomDesign></BottomDesign>
    </LayoutWrapper>
  );
}

const LayoutWrapper = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-items: flex-end;
`;
