import styled from 'styled-components';
import { ifProp, prop } from 'styled-tools';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Line = styled.div`
  position: relative;
  flex: 1;
  height: ${prop('theme.progressWidth')}px;
  background-color: ${prop('theme.colors.progress.default')};
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: ${ifProp('completed', 0, '100%')};
    transition: right ${prop('theme.progressTransitionDuration')}ms;
    background-color: ${prop('theme.colors.progress.completed')};
  }
`;
