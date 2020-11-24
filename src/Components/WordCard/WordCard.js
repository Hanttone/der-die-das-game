import styled from 'styled-components';

export default function WordCard({ word }) {
  return (
    <WordCardWrapper>
      <div></div>
      <h2>{word}</h2>
    </WordCardWrapper>
  );
}

const WordCardWrapper = styled.section`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  z-index: 1;

  div {
    width: 80%;
    height: 182px;
    background-color: white;
    opacity: 0.1;
    border-radius: 28px;
    grid-column: 1;
    grid-row: 1;
  }

  h2 {
    width: 100%;
    text-align: center;
    font-size: 1.78rem;
    color: white;
    grid-column: 1;
    grid-row: 1;
  }
`;
