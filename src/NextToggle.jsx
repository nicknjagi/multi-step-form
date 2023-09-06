const NextToggle = ({user,setCurrentStep, currentStep,setNameError,setEmailError,emailError,setNumberError}) => {

  const checkErrors = () => {
    user.name.trim() !== '' ? setNameError(false) : setNameError(true)
    user.email.trim() !== '' ? checkEmail() : setEmailError(true)
    user.number.trim() !== '' ? setNumberError(false) : setNumberError(true)
    if(user.name.trim() !== '' && !emailError && user.number.trim() !== ''){
      setCurrentStep(curr => curr + 1)
    }
  }

  const checkEmail = () => {
    user.email.trim() !== '' ? 
      isEmail(user.email.trim()) ? setEmailError(false)  : setEmailError(true)
    : setEmailError(true)
  }

  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
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
