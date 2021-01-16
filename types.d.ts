import * as React from 'react';

interface RenderStepProps {
    /**
     * step data from items array
     */
    data: object | string | number;
    /**
     * step index
     */
    index: number;
    /**
     * whether step completed or not
     */
    completed: boolean;
}

export interface StepperProps {
    /**
     * array of data for each step
     * @default []
     */
    items?: object[] | string[] | number[];
    /**
     * index of current step
     */
    currentStepIndex?: number;
    /**
     * percent of current step completion
     * @default 0
     */
    currentStepProgress?: number;
    /**
     * function, that should return rendered step
     * @default ({ data }) => data
     */
    renderStep?: ((props: RenderStepProps) => React.ReactChild);
    /**
     * Stepper className
     */
    className?: string;
    /**
     * Stepper theme
     */
    theme?: {
        colors?: {
            step?: {
                default?: string;
                completed?: string;
            };
            progress?: {
                default?: string;
                completed?: string;
            };
        };
        stepSize?: number;
        progressWidth?: number;
        progressTransitionDuration?: number;
    };
}

export default class Stepper extends React.Component<StepperProps> {}