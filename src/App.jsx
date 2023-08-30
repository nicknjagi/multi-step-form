import { useState } from 'react'
import StepTracker from './StepTracker'
import PersonalInfo from './forms/PersonalInfo'
import NextToggle from './NextToggle'
import Plan from './forms/Plan'
import AddOns from './forms/AddOns'
import Summary from './forms/Summary'
import Thanks from './Thanks'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [user, setUser] = useState({
    name:'',
    email:'',
    number:'',
    plan:'arcade',
    billing:'monthly',
    'online-service':false,
    'larger-storage':false,
    'customizable-profile':false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitted!');
  }

  return (
    <>
      <main>
        <StepTracker currentStep={currentStep} />
        {currentStep !== 5 ? <form onSubmit={handleSubmit} className="form-container">
          {currentStep === 1 && <PersonalInfo setUser={setUser} user={user} />}
          {currentStep === 2 && <Plan user={user} setUser={setUser} />}
          {currentStep === 3 && <AddOns user={user} setUser={setUser} />}
          {currentStep === 4 && <Summary user={user} setCurrentStep={setCurrentStep} />}

          <NextToggle
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
            />
        </form> : null}
        {currentStep === 5 && <Thanks />}
      </main>
    </>
  )
}

export default App
