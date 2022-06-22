import React from 'react'
import './xborg.css'

import Card from '../Panel/Card'
const Xborg = () => {
  return (
    <section className="xborg" id="xborg">  
        <div className='container'>
            <div className="xborg-container">                
                <div className="xborg-content" data-aos="fade-down">
                    <h1>What is XGoldenSpring</h1>
                    <br />
                    As a cross-chain router protocol(CRP) X-GS it is a infrastructure for on chain asset interoperabillity,envisioned to be the ultimate router for WEB3.GoldenSpring concept was born to service the clear needs of different and diverse blockchains to communicate with each other.
                    <br />
                    For our ecosystem to reach the next level we need a fast,secure,inexpensive and reliable way to exchange value,data and exercise control between the chains.
                    Also X-GS it is the governance token and allows holders to vote and participate in the governance of the community and ecosystem.
                    <br />                    
                </div>
                <div className="xborg-content card-content " data-aos="fade-up" style={{width:'fit-content', margin:'auto'}}>
                  <div > <Card number={1}/></div>
                  <div > <Card number={2}/></div>
                  <div > <Card number={3}/></div>
                  <div > <Card number={4}/></div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Xborg