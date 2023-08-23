import React from 'react'

const PersonalInfo = () => {
  return (
    <div className='personal-info'>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" placeholder="e.g. Stephen King" />
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email" id="email" placeholder='e.g stephenking@lorem.com' />
      <label htmlFor="phone">Phone Number</label>
      <input type="number" placeholder='e.g. +1 234 567 890' />
    </div>
  )
}

export default PersonalInfo
