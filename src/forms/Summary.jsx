import React from 'react'

const Summary = ({setCurrentStep,user}) => {
  const {
    plan,
    billing,
    "online-service":onlineService,
    'larger-storage':largerStorage,
    'customizable-profile':customizable
  } = user

  const checkPrice = (str) => {
    if(str === 'arcade'){
      return 9
    }
    if(str === 'advanced'){
      return 12
    }
    if(str === 'pro'){
      return 15
    }
  }

  let total = checkPrice(plan) ;

  const getTotal = () => {
    if(onlineService){
      total += 1
    }
    if(largerStorage){
      total += 2
    }
    if(customizable){
      total += 2
    }
    if(billing === 'yearly'){
      total *= 10
    }
  }

  getTotal()

  return (
    <section className="summary-container">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>
      <div className="summary">
        <div className="plan-summary">
          <div>
            <h3>
              <span>Arcade</span>(<span>Monthly</span>)
            </h3>
            <button onClick={() => setCurrentStep(2)}>Change</button>
          </div>
          <p>${billing === 'monthly'
              ? `${checkPrice(plan)}/mo`
              : `${checkPrice(plan)*10}yr`}
          </p>
        </div>
        <hr />
        {onlineService && (
          <div className="add-on-summary">
            <p>Online service</p>
            <p>+${billing === 'monthly' ? '1/mo' : '10/yr'}</p>
          </div>
        )}
        {largerStorage && (
          <div className="add-on-summary">
            <p>Larger storage</p>
            <p>+${billing === 'monthly' ? '2/mo' : '20/yr'}</p>
          </div>
        )}
        {customizable && (
          <div className="add-on-summary">
            <p>Customizable profile</p>
            <p>+${billing === 'monthly' ? '2/mo' : '20/yr'}</p>
          </div>
        )}
      </div>
      <div className="total-container">
        <p>Total (per {billing === 'monthly' ? 'month' : 'year'})</p>
        <p>
          +{total}/{billing === 'monthly' ? 'mo' : 'yr'}
        </p>
      </div>
    </section>
  )
}

export default Summary
