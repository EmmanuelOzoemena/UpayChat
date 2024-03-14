import React from 'react'
import Content from '../Content/Content'
import Faq from '../Faq'
import Footer from '../Footer'
import { HeroSection } from '../HeroSection'
import HomeInfoBox from '../HomeInfoBox'
import Testimonial from '../Testimonial'

export const Home = () => {
  return (
    <>
      <HeroSection />
      <section>
        <div className='container'>
          <HomeInfoBox />
        </div>
      </section>
      <Content />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  )
}