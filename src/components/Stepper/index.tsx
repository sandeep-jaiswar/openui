import React, { useState } from 'react';

interface Step {
  id: string;
  label: string;
}

interface StepperProps {
  steps: Step[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="flex">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`flex items-center ${
            index < activeStep ? 'text-blue-500' : 'text-gray-500'
          }`}
        >
          <div
            className={`w-4 h-4 rounded-full ${
              index === activeStep ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
          <span className="ml-2">{step.label}</span>
        </div>
      ))}
      <div className="ml-auto">
        {activeStep > 0 && (
          <button className="px-4 py-2 bg-blue-500 text-white" onClick={handlePrevious}>
            Previous
          </button>
        )}
        {activeStep < steps.length - 1 && (
          <button className="px-4 py-2 ml-2 bg-blue-500 text-white" onClick={handleNext}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
