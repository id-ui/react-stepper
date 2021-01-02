import React from 'react';
import PropTypes from 'prop-types';
import ProgressCircle from './components/ProgressCircle';
import { Container, Step, StepContent } from './styled';
import defaultTheme from './theme';

function Stepper({
  items,
  currentStepIndex,
  currentStepProgress,
  renderStep,
  className,
  theme: providedTheme,
}) {
  const theme = { ...defaultTheme, ...providedTheme };

  return (
    <Container
      className={className}
      theme={theme}
      progress={(100 * (currentStepIndex + 1)) / items.length}
    >
      {items.map((step, index) => {
        const isCompleted =
          index < currentStepIndex ||
          (index === currentStepIndex && currentStepProgress == 100);
        return (
          <Step key={index} completed={isCompleted} size={theme.stepSize}>
            <ProgressCircle
              diameter={theme.stepSize}
              progress={
                index === currentStepIndex
                  ? currentStepProgress
                  : isCompleted
                  ? 100
                  : 0
              }
              theme={theme}
              completed={isCompleted}
            />
            <StepContent>
              {renderStep({ data: step, index, completed: isCompleted })}
            </StepContent>
          </Step>
        );
      })}
    </Container>
  );
}

Stepper.propTypes = {
  items: PropTypes.array,
  currentStepIndex: PropTypes.number,
  currentStepProgress: PropTypes.number,
  renderStep: PropTypes.func,
  className: PropTypes.string,
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      step: PropTypes.shape({
        default: PropTypes.string,
        completed: PropTypes.string,
      }),
      progress: PropTypes.shape({
        default: PropTypes.string,
        completed: PropTypes.string,
      }),
    }),
    stepSize: PropTypes.number,
    progressWidth: PropTypes.number,
    progressTransitionDuration: PropTypes.number,
  }),
};

Stepper.defaultProps = {
  theme: defaultTheme,
  currentStepProgress: 0,
  renderStep: ({ data }) => data,
  items: [],
};

export default Stepper;
