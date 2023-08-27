import React from 'react'

const AddOns = () => {
  return (
    <section className='add-on-container'>
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="form-control">
        <input type="checkbox" name="add-ons" id="online-service" />
        <label htmlFor="online-service">
          <div>
            <p>Online service</p>
            <p>Access to multiplayer games</p>
          </div>
          <p>+$1/mo</p>
        </label>
      </div>

      <div className="form-control active">
        <input type="checkbox" name="add-ons" id="larger-storage" />
        <label htmlFor="larger-storage">
          <div>
            <p>Larger storage</p>
            <p>Extra 1TB of cloud save</p>
          </div>
          <p>+$2/mo</p>
        </label>
      </div>

      <div className="form-control">
        <input type="checkbox" name="add-ons" id="customizable" />
        <label htmlFor="customizable">
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
