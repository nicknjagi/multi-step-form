import React from 'react'

const PersonalInfo = ({handleChange,user}) => {
  
  
  return (
    <section className="personal-info">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, and phone number.</p>
      <label htmlFor="name">Name</label>
      <input
        onChange={handleChange}
        type="text"
        id="name"
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
        value={user.email}
        placeholder="e.g stephenking@lorem.com"
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        onChange={handleChange}
        type="number"
        name="number"
        value={user.number}
        placeholder="e.g. +1 234 567 890"
      />
    </section>
  )
}

export default PersonalInfo
