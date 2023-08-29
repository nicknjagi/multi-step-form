import React from 'react'

const AddOns = ({user,setUser}) => {

  const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.checked})
  }

  return (
    <section className='add-on-container'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className={user['online-service'] ? "form-control active" : 'form-control'}>
        <input type="checkbox" name="online-service" id="online-service" onChange={handleChange}/>
        <label htmlFor="online-service">
          <div>
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </div>
          <p>+$1/mo</p>
        </label>
      </div>

      <div className={user['larger-storage'] ? "form-control active" : 'form-control'}>
        <input type="checkbox" name="larger-storage" id="larger-storage" onChange={handleChange}/>
        <label htmlFor="larger-storage">
          <div>
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p>+$2/mo</p>
        </label>
      </div>

      <div className={user['customizable-profile'] ? "form-control active" : 'form-control'}>
        <input type="checkbox" name="customizable-profile" id="customizable-profile" onChange={handleChange}/>
        <label htmlFor="customizable-profile">
          <div>
            <p>Customizable profile</p>
            <p>Custom theme on your profile</p>
          </div>
          <p>+$2/mo</p>
        </label>
      </div>
    </section>
  )
}

export default AddOns
