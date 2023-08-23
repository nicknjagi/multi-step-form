import React from 'react'

const NextToggle = ({handleNextStep, handlePrevStep, currentStep}) => {
  return (
    <div className="next-toggle">
      <a href="#" onClick={handlePrevStep}>
        Go Back
      </a>
      {currentStep !== 4 ? (
        <button onClick={handleNextStep}>Next Step</button>
      ) : (
        <input type="submit" value="Confirm" />
      )}
    </div>
  )
}

export default NextToggle
