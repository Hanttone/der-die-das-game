import styled from 'styled-components/macro';
import { useEffect, useState } from 'react';

export default function TimerBar({
  time,
  scores,
  wrongAnswer,
}) {
  const [
    progressbarWidth,
    setProgressbarWidth,
  ] = useState(time);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => startTimer(), [
    progressbarWidth,
  ]);

  function startTimer() {
    if (progressbarWidth > 0) {
      setTimeout(
        () =>
          setProgressbarWidth(
            progressbarWidth - 1
          ),
        1000
      );
    }
    console.log(progressbarWidth);
  }

  return (
    <TimerWrapper width={progressbarWidth * 21}>
      <div>
        <section></section>
      </div>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  margin-bottom: 25px;

  div {
    width: 315px;
    height: 11px;
    background-color: grey;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  section {
    width: ${(props) => props.width + 'px'};
    height: 11px;
    background-image: linear-gradient(
      -45deg,
      #d933f0,
      #a429b4,
      #9425a3
    );
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;
