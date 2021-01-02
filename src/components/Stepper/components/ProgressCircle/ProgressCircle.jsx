import React from 'react';
import { OuterCircle, InnerCircle, Container, StrokeCircle } from './styled';

function ProgressCircle({ diameter, progress, theme, completed }) {
  const radius = diameter / 2;
  const circumference = (diameter - theme.progressWidth) * Math.PI;

  return (
    <Container
      width={diameter}
      height={diameter}
      viewBox={`0 0 ${diameter} ${diameter}`}
    >
      <OuterCircle r={radius} cx={radius} cy={radius} theme={theme} />
      <InnerCircle
        r={radius - theme.progressWidth}
        cx={radius}
        cy={radius}
        theme={theme}
      />
      <StrokeCircle
        r={radius - theme.progressWidth / 2}
        completed={completed}
        progress={progress}
        circumference={circumference}
        theme={theme}
        cx={radius}
        cy={radius}
      />
    </Container>
  );
}

export default ProgressCircle;
