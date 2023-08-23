import React from 'react'

const PersonalInfo = () => {
  
  const handleChange = (e) => {
    console.log(e.currentTarget.value);
  }

  return (
    <div className='personal-info'>
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="name">Name</label>
      <input onChange={(e)=>handleChange(e)} type="text" id="name" placeholder="e.g. Stephen King" />
      <label htmlFor="email">Email Address</label>
      <input onChange={(e)=>handleChange(e)} type="email" name="email" id="email" placeholder='e.g stephenking@lorem.com' />
      <label htmlFor="phone">Phone Number</label>
      <input onChange={(e)=>handleChange(e)} type="number" placeholder='e.g. +1 234 567 890' />
    </div>
  )
}

export default PersonalInfo
