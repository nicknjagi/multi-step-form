import { useState } from 'react'
import StepTracker from './StepTracker'
import PersonalInfo from './forms/PersonalInfo'

function App() {

  return (
    <>
      <main>
        <StepTracker />
        <PersonalInfo />
      </main>
    </>
  )
}

export default App
