import React from 'react'
import './hero.css'
import TokenSymbol from '../TokenSymbol/TokenSymbol'
import Countdown from '../Countdown/Countdown'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="container">
        <div className="hero-content">
          <TokenSymbol/>              
        </div>
        <Countdown/>
      </div>
      {/* <div className="hero-overlay"></div> */}
    </section>
  )
}

export default Hero