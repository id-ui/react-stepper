import styled from 'styled-components';
import { prop, withProp } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &::before,
  &::after {
    content: '';
    z-index: 1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: ${prop('theme.progressWidth')}px;
  }
  &::before {
    left: 0;
    right: calc(
      ${withProp('progress', (progress) => 100 - progress)}% +
        ${prop('theme.stepSize')}px
    );
    background-color: ${prop('theme.colors.progress.completed')};
    transition: right ${prop('theme.progressTransitionDuration')}ms;
  }
  &::after {
    left: calc(${prop('progress')}% - ${prop('theme.stepSize')}px);
    right: 0;
    background-color: ${prop('theme.colors.progress.default')};
    transition: left ${prop('theme.progressTransitionDuration')}ms;
  }
`;

export const Step = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${prop('size')}px;
  height: ${prop('size')}px;
`;

export const StepContent = styled.div`
  z-index: 3;
`;
