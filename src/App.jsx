import { useState } from 'react'
import StepTracker from './StepTracker'
import PersonalInfo from './forms/PersonalInfo'
import NextToggle from './NextToggle'

function App() {

  return (
    <>
      <main>
        <StepTracker />
        <form className="form-container">
          <PersonalInfo />
          <NextToggle />
        </form>
      </main>
    </>
  )
}

export default App
