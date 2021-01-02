import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import Stepper from 'components/Stepper';

const steps = Array.from({ length: 5 }, (a, b) => b + 1);

describe('Stepper', () => {
  it('accessible', async () => {
    const { container } = render(
      <Stepper steps={steps} currentStepIndex={0} currentStepProgress={50} />
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders all steps', async () => {
    const currentStepIndex = 2;
    const { getByText, rerender } = render(
      <Stepper
        steps={steps}
        renderStep={({ data, completed }) => (
          <div>
            {data}
            {completed ? ' completed' : ''}
          </div>
        )}
        currentStepIndex={currentStepIndex}
        currentStepProgress={0}
      />
    );
    steps.forEach((step) => {
      if (step < 3) {
        expect(getByText(`${step} completed`)).toBeInTheDocument();
      } else {
        expect(getByText(step)).toBeInTheDocument();
      }
    });

    rerender(
      <Stepper
        steps={steps}
        renderStep={({ data, completed }) => (
          <div>
            {data}
            {completed ? ' completed' : ''}
          </div>
        )}
        currentStepIndex={currentStepIndex}
        currentStepProgress={100}
      />
    );
    steps.forEach((step) => {
      if (step <= 3) {
        expect(getByText(`${step} completed`)).toBeInTheDocument();
      } else {
        expect(getByText(step)).toBeInTheDocument();
      }
    });
  });
});
