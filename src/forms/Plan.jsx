import React from 'react'
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

const Plan = () => {
  return (
    <section className="plan">
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly billing.</p>
      <div className="plans-container">

        <label className='active' htmlFor="arcade">
          <img src={arcade} aria-hidden="true" />
          <span className="label-text">
            <span className="title">Arcade</span>
            <span className="price">$9/mo</span>
            {/* <span>2 months free</span> */}
          </span>
        </label>
        <input type="radio" name="plan" id="arcade" />

        <label htmlFor="advanced">
          <img src={advanced} aria-hidden="true" />
          <span className="label-text">
            <span className="title">Advanced</span>
            <span className="price">$12/mo</span>
            {/* <span>2 months free</span> */}
          </span>
        </label>
        <input type="radio" name="plan" id="advanced" />

        <label htmlFor="pro">
          <img src={pro} aria-hidden="true" />
          <span className="label-text">
            <span className="title">Pro</span>
            <span className="price">$15/mo</span>
            {/* <span>2 months free</span> */}
          </span>
        </label>
        <input type="radio" name="plan" id="pro" />
      </div>

      <div className='billing-container'>
        <label className='active' htmlFor="monthly">Monthly</label>
        <input type="radio" name="billing" id="monthly" />

        <div className='toggle'>
          <span></span>
        </div>

        <label htmlFor="yearly">Yearly</label>
        <input type="radio" name="billing" id="yearly" />
      </div>
    </section>
  )
}

export default Plan
