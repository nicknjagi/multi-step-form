import React from 'react'

const PersonalInfo = ({setUser,user,nameError, emailError,numberError}) => {
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  
  return (
    <section className="personal-info">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="name"><span>Name</span><span className='error'>This field is required</span></label>
      <input
        onChange={handleChange}
        type="text"
        id="name"
        className={nameError ? 'input-error' : 'input'}
        name="name"
        value={user.name}
        placeholder="e.g. Stephen King"
      />
      <label htmlFor="email">Email Address</label>
      <input
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        className={emailError ? 'input-error' : 'input'}
        value={user.email}
        placeholder="e.g stephenking@lorem.com"
      />
      <label htmlFor="number">Phone Number</label>
      <input
        onChange={handleChange}
        type="number"
        name="number"
        id='number'
        className={numberError ? 'input-error' : 'input'}
        value={user.number}
        placeholder="e.g. +1 234 567 890"
      />
    </section>
  )
}

export default PersonalInfo
