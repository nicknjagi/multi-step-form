import React from 'react'
import thankYou from './assets/images/icon-thank-you.svg'


const Thanks = () => {
  return (
    <section className='thanks-container'>
      <img src={thankYou} alt="" />
      <h2>Thank You!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </section>
  )
}

export default Thanks
