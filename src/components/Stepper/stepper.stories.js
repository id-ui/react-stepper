import React, { useState } from 'react';
import styled from 'styled-components';
import { withPropsTable } from 'storybook-addon-react-docgen';
import { ifProp } from 'styled-tools';
import Stepper from './Stepper';

export default {
  title: 'Stepper',
  component: Stepper,
  argTypes: {
    items: {
      disable: true,
      description: 'array of data for each step',
      defaultValue: [],
      table: {
        defaultValue: { summary: '[]' },
      },
    },
    currentStepIndex: {
      control: 'number',
      description: 'index of current step',
    },
    currentStepProgress: {
      control: 'number',
      description: 'percent of current step completion',
      defaultValue: 0,
      table: {
        defaultValue: { summary: '0' },
      },
    },
    renderStep: {
      disable: true,
      description:
        'function for step rendering, accepts { data: step config, completed: is step completed, index: step index }',
      table: {
        defaultValue: { summary: '({ data }) => data' },
      },
    },
    theme: {
      control: 'object',
      description: 'Stepper theme',
      defaultValue: Stepper.defaultProps.theme,
      table: {
        defaultValue: { summary: JSON.stringify(Stepper.defaultProps.theme) },
      },
    },
    className: {
      control: 'text',
      description: 'stepper className',
    },
  },
  decorators: [withPropsTable],
  parameters: {
    props: {
      propTablesInclude: [Stepper],
    },
  },
};

const Container = styled.div`
  width: 500px;
`;

const Actions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  & > *:not(:last-child) {
    margin-right: 10px;
  }
`;

const CurrentStepProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  input {
    margin-left: 10px;
  }
`;

const Step = styled.div`
  transition: 0.3s linear color;
  transition-delay: 0.3s;
  color: ${ifProp('completed', '#11AFD9', '#FFFFFF')};
`;

const items = Array.from({ length: 5 }, (a, b) => b + 1);

export function Example(props) {
  const [currentStep, setStep] = useState(0);
  const [currentStepProgress, setCurrentStepProgress] = useState(0);

  return (
    <Container>
      <Stepper
        {...props}
        items={items}
        currentStepIndex={currentStep}
        currentStepProgress={currentStepProgress}
        renderStep={({ data, completed, index }) => (
          <Step
            onClick={() => {
              setCurrentStepProgress(0);
              setStep(index);
            }}
            completed={completed}
          >
            {data}
          </Step>
        )}
      />
      <Actions>
        <button
          onClick={() =>
            setStep(currentStep === 0 ? items.length - 1 : currentStep - 1)
          }
        >
          Previous
        </button>
        <div>Current Step: {currentStep + 1}</div>
        <button
          onClick={() =>
            setStep(currentStep === items.length - 1 ? 0 : currentStep + 1)
          }
        >
          Next
        </button>
      </Actions>
      <CurrentStepProgress>
        currentStepProgress:
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={currentStepProgress}
          onChange={(e) => setCurrentStepProgress(e.target.value)}
        />
        ({currentStepProgress}%)
      </CurrentStepProgress>
    </Container>
  );
}
