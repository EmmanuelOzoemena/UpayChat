import React from 'react'

export const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-section-content-box'>
        <div className='hero-section-content'>
          <h1 className='hero-section-title'>
            Apply for the Upaychat Secured Rewards Mastercard and get 1% cash back today
          </h1>
          <p className='hero-section-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br /> Dolorum, quas. Amet soluta assumenda cum?
          </p>
        </div>
        <button className='btn btn-primary'>Calculate Your Credit Line</button>
      </div>
      <div className='hero-section-img'>
        <img src="./img/hero-img.png" alt="Hero Section" />
      </div>
    </section>
  )
}
