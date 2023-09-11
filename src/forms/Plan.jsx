import React from 'react'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

const Plan = ({user,setUser}) => {

  const handleRadioInput = (e) => {
    setUser({...user,[e.target.name]:e.target.id})
  }

  const handleToggleClick = () => {
    if(user.billing === 'monthly'){
      setUser({...user, billing:'yearly'})
    }
    else{
      setUser({...user, billing:'monthly'})
    }
  }

  return (
    <section className="plan">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plans-container">
        <label
          className={user.plan === 'arcade' ? 'active' : ''}
          htmlFor="arcade">
          <img src={arcade} aria-hidden="true" />
          <span className="label-text">
            <span className="title">Arcade</span>
            <span className="price">{user.billing === 'yearly' ? '$90/yr' :'$9/mo'}</span>
            {user.billing === 'yearly' ? <span>2 months free</span> : null}
          </span>
        </label>
        <input
          type="radio"
          name="plan"
          id="arcade"
          onChange={handleRadioInput}
        />

        <label
          className={user.plan === 'advanced' ? 'active' : ''}
          htmlFor="advanced">
          <img src={advanced} aria-hidden="true" />
          <span className="label-text">
            <span className="title">Advanced</span>
            <span className="price">{user.billing === 'yearly' ? '$120/yr': '$12/mo'}</span>
            {user.billing === 'yearly' ? <span>2 months free</span> : null}
          </span>
        </label>
        <input
          type="radio"
          name="plan"
          id="advanced"
          onChange={handleRadioInput}
        />

        <label className={user.plan === 'pro' ? 'active' : ''} htmlFor="pro">
          <img src={pro} aria-hidden="true" />
          <span className="label-text">
            <span className="title">Pro</span>
            <span className="price">{user.billing === 'yearly' ? '$150/yr':'$15/mo'}</span>
            {user.billing === 'yearly' ? <span>2 months free</span> : null}
          </span>
        </label>
        <input type="radio" name="plan" id="pro" onChange={handleRadioInput} />
      </div>

      <div className="billing-container">
        <label
          className={user.billing === 'monthly' ? 'active' : ''}
          htmlFor="monthly">
          Monthly
        </label>
        <input
          type="radio"
          name="billing"
          id="monthly"
          checked={user.billing === 'monthly'}
          onChange={handleRadioInput}
        />

        <button
          type="button"
          className={user.billing === 'monthly' ? 'toggle' : 'toggle yearly'}
          onClick={handleToggleClick}>
          <span></span>
        </button>

        <label
          className={user.billing === 'yearly' ? 'active' : ''}
          htmlFor="yearly">
          Yearly
        </label>
        <input
          type="radio"
          name="billing"
          id="yearly"
          checked={user.billing === 'yearly'}
          onChange={handleRadioInput}
        />
      </div>
    </section>
  )
}

export default Plan
