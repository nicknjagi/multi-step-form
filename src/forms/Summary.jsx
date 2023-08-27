import React from 'react'

const Summary = ({setCurrentStep}) => {
  return (
    <section className='summary-container'>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className='summary'>
        <div className="plan-summary">
          <div>
            <h3>Arcade(Monthly)</h3>
            <button onClick={()=> setCurrentStep(2)} >Change</button>
          </div>
          <p>$9/mo</p>
        </div>
        <hr />
        <div className="add-on-summary">
          <p>Online service</p>
          <p>+$1/mo</p>
        </div>
        <div className="add-on-summary">
          <p>Online service</p>
          <p>+$1/mo</p>
        </div>
      </div>
        <div className="total-container">
          <p>Total (per month)</p>
          <p>+12/mo</p>
        </div>
    </section>
  )
}

export default Summary
