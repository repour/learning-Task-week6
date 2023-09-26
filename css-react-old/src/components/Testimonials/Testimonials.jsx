import React from 'react'
import Oponions from './Oponions'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonial'>
      <p>TESTIMONIALS</p>
      <h2>Hear good experiences from our customers</h2>
      <Oponions />
      <div className='more'>
        <img src="./TESTIMONIALS/Ellipse 9.svg" alt="more" />
        <img src="./TESTIMONIALS/Ellipse 9.svg" alt="more" />
        <img src="./TESTIMONIALS/Ellipse 9.svg" alt="more" />
      </div>
    </div>
  )
}

export default Testimonials