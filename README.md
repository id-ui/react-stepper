# Stepper React Component

[![NPM](https://img.shields.io/npm/v/@idui/react-stepper.svg)](https://www.npmjs.com/package/@idui/react-stepper/)
[![Size](https://img.shields.io/bundlephobia/min/@idui/react-stepper)](https://www.npmjs.com/package/@idui/react-stepper)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Coverage Status](https://coveralls.io/repos/github/id-ui/react-stepper/badge.svg?branch=main)](https://coveralls.io/github/id-ui/react-stepper?branch=main)
[![LICENSE](https://img.shields.io/github/license/id-ui/react-stepper)](https://github.com/id-ui/react-stepper/blob/main/LICENSE)

- [Docs](https://id-ui.github.io/react-stepper/?path=/docs/stepper--example)
- [Example](https://id-ui.github.io/react-stepper/?path=/story/stepper--example)

## Install

```bash
npm install --save @idui/react-stepper
```

```bash
yarn add @idui/react-stepper
```


### See props in [Docs](https://id-ui.github.io/react-stepper/?path=/docs/stepper--example)


### Basic Example

```jsx
import React, {  useState } from 'react'
import styled from 'styled-components';
import Stepper from '@idui/react-stepper'

function Example() {
  const [currentStep, setStep] = useState(0);
    
  return <Stepper
      items={[1, 2, 3]}
      currentStepIndex={currentStep}
      renderStep={({ data, completed, index }) => (
          <Step
              onClick={() => setStep(index)}
              completed={completed}
          >
              {data}
          </Step>
      )}
  />
}

const Step = styled.div`
  transition: 0.3s linear color;
  transition-delay: 0.3s;
  color: ${ifProp('completed', '#11AFD9', '#FFFFFF')};
`;
```

### Full Example

- [Live version](https://id-ui.github.io/react-stepper/?path=/story/stepper--example)

```jsx
import React, {  useState } from 'react'
import styled from 'styled-components';
import Stepper from '@idui/react-stepper'

function Example() {
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
```

### See more details in [storybook](https://id-ui.github.io/react-stepper/?path=/docs/stepper--example)

## License

MIT © [kaprisa57@gmail.com](https://github.com/id-ui)