import {useState} from 'react'

const NextToggle = ({user,setCurrentStep, currentStep,setNameError,setEmailError,setNumberError}) => {

  const checkErrors = () => {
    user.name.trim() !== '' ? setNameError(false) : setNameError(true)
    user.email.trim() !== '' ? setEmailError(false) : setEmailError(true)
    user.number.trim() !== '' ? setNumberError(false) : setNumberError(true)
    if(user.name.trim() !== '' && user.email.trim() !== '' && user.number.trim() !== ''){
      setCurrentStep(curr => curr + 1)
    }
  }

  const handleNextStep = () => {
    if(currentStep === 1){
      checkErrors()
      return
    }
    if(currentStep === 5){
      return
    }
    setCurrentStep((curr)=>curr + 1)
  }

  const handlePrevStep = () => {
    if(currentStep === 1){
      return
    }
    setCurrentStep((curr)=>curr - 1)
  }
  
  return (
    <>
      {currentStep !== 5 ? (
        <div className="next-toggle">
          {currentStep !== 1 && (
            <a href="#" className="prev" onClick={handlePrevStep}>
              Go Back
            </a>
          )}
          {currentStep !== 4 ? (
            <a href="#" className="next-btn" onClick={handleNextStep}>
              Next Step
            </a>
          ) : (
            <input
              onClick={handleNextStep}
              type="submit"
              className="confirm-btn"
              value="Confirm"
            />
          )}
        </div>
      ) : null}
    </>
  )
}

export default NextToggle
