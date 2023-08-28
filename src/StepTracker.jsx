import React from 'react'

const StepTracker = ({currentStep}) => {
  return (
    <aside className="step-tracker">
      <div className="step">
        <button className={currentStep === 1 ? 'active' : ''}>1</button>
        <div className="step-label-container">
          <span>STEP 1</span>
          <h3>YOUR INFO</h3>
        </div>
      </div>
      <div className="step">
        <button className={currentStep === 2 ? 'active' : ''}>2</button>
        <div className="step-label-container">
          <span>STEP 2</span>
          <h3>SELECT PLAN</h3>
        </div>
      </div>
      <div className="step">
        <button className={currentStep === 3 ? 'active' : ''}>3</button>
        <div className="step-label-container">
          <span>STEP 3</span>
          <h3>ADD-ONS</h3>
        </div>
      </div>
      <div className="step">
        <button className={currentStep === 4 ? 'active' : ''}>4</button>
        <div className="step-label-container">
          <span>STEP 4</span>
          <h3>SUMMARY</h3>
        </div>
      </div>
    </aside>
  )
}

export default StepTracker
