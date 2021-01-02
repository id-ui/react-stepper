import styled from 'styled-components';
import { ifProp, prop, withProp } from 'styled-tools';

export const Container = styled.svg`
  z-index: 2;
  position: absolute;
  top: 0;
  left: 0;
`;

export const OuterCircle = styled.circle`
  fill: ${prop('theme.colors.progress.default')};
`;

export const InnerCircle = styled.circle`
  transition: fill ${prop('theme.progressTransitionDuration')}ms;
  fill: ${ifProp(
    'completed',
    prop('theme.colors.step.completed'),
    prop('theme.colors.step.default')
  )};
`;

export const StrokeCircle = styled.circle`
  transform-origin: 50% 50%;
  transform: rotate(-180deg);
  transition: stroke-dashoffset ${prop('theme.progressTransitionDuration')}ms;
  fill: transparent;
  stroke: ${prop('theme.colors.progress.completed')};
  stroke-width: ${prop('theme.progressWidth')}px;
  stroke-dasharray: ${prop('circumference')} ${prop('circumference')};
  stroke-dashoffset: ${withProp(
    ['circumference', 'progress'],
    (circumference, progress) => circumference * (1 - progress / 100)
  )};
`;
