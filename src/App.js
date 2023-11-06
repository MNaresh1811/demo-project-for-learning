import React, { useState } from "react";
import Stepper from "react-vertical-stepper";
import { initialStepsArr } from "./constants";
import "./styles.css";

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (step, index) => setCurrentStep(index);

  return (
    <div className="App">
      <div className="header">Company Name</div>
      <div className="siteBody">
        <div className="sideBar">
          <div className="stepSummary">
            <Stepper
              steps={initialStepsArr}
              currentStepIndex={currentStep}
              onStepClick={handleStepClick}
              labelPosition="right"
              styles={{
                LineSeparator: (step, index) => ({ height: "100px" })
              }}
            />
          </div>
        </div>
        <div className="mainSection">
          {currentStep === 0 && (
            <div className="addressSection">Add Delivery Address</div>
          )}
          {currentStep === 1 && (
            <div className="addressSection">Add Payment Details</div>
          )}
          {currentStep === 2 && (
            <div className="addressSection">Review your Order</div>
          )}
        </div>
      </div>
    </div>
  );
}
