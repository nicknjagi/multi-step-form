import { useState } from 'react'
import StepTracker from './StepTracker'
import PersonalInfo from './forms/PersonalInfo'
import NextToggle from './NextToggle'

function App() {

  return (
    <>
      <main>
        <StepTracker />
        <div className="form-container">
          <PersonalInfo />
          <NextToggle />
        </div>
      </main>
    </>
  )
}

export default App
