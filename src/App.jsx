import { useState } from 'react'
import StepTracker from './StepTracker'
import PersonalInfo from './forms/PersonalInfo'
import NextToggle from './NextToggle'
import Plan from './forms/Plan'

function App() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNextStep = () => {
    if(currentStep === 4){
      return
    }
    setCurrentStep((curr)=>curr + 1)
    console.log(currentStep);
  }

  const handlePrevStep = () => {
    if(currentStep === 1){
      return
    }
    setCurrentStep((curr)=>curr - 1)
    console.log(currentStep);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted!');
  }

  return (
    <>
      <main>
        <StepTracker currentStep={currentStep}/>
        <form onSubmit={handleSubmit} className="form-container">
          {currentStep === 1 && <PersonalInfo />}
          {currentStep === 2 && <Plan />}

          <NextToggle handleNextStep={handleNextStep} handlePrevStep={handlePrevStep} currentStep={currentStep}/>
        </form>
      </main>
    </>
  )
}

export default App
