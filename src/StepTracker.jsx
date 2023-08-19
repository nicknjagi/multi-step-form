import React from 'react'

const StepTracker = () => {
  return (
    <aside className='step-tracker'>
      <div>
        <div>
          <button>1</button>
          <div>
            <span>STEP 1</span>
            <h3>YOUR INFO</h3>
          </div>
        </div>
        <div>
          <button>2</button>
          <div>
            <span>STEP 2</span>
            <h3>SELECT PLAN</h3>
          </div>
        </div>
        <div>
          <button>3</button>
          <div>
            <span>STEP 3</span>
            <h3>ADD-ONS</h3>
          </div>
        </div>
        <div>
          <button>4</button>
          <div>
            <span>STEP 4</span>
            <h3>SUMMARY</h3>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default StepTracker
