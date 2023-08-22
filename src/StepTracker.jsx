import React from 'react'

const StepTracker = () => {
  return (
    <aside className='step-tracker'>
        <div className='step'>
          <button className='active'>1</button>
          <div className='step-label-container'>
            <span>STEP 1</span>
            <h3>YOUR INFO</h3>
          </div>
        </div>
        <div className='step'>
          <button>2</button>
          <div className='step-label-container'>
            <span>STEP 2</span>
            <h3>SELECT PLAN</h3>
          </div>
        </div>
        <div className='step'>
          <button>3</button>
          <div className='step-label-container'>
            <span>STEP 3</span>
            <h3>ADD-ONS</h3>
          </div>
        </div>
        <div className='step'>
          <button>4</button>
          <div className='step-label-container'>
            <span>STEP 4</span>
            <h3>SUMMARY</h3>
          </div>
        </div>
    </aside>
  )
}

export default StepTracker
