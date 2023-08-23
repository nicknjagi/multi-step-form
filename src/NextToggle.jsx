import React from 'react'

const NextToggle = ({handleNextStep, handlePrevStep, currentStep}) => {
  return (
    <div className="next-toggle">
      <a href="#" className='prev' onClick={handlePrevStep}>
        Go Back
      </a>
      {currentStep !== 4 ? (
        <a href="#" className='next-btn' onClick={handleNextStep}>Next Step</a>
      ) : (
        <input type="submit" value="Confirm" />
      )}
    </div>
  )
}

export default NextToggle
