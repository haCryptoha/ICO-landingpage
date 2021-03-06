import React from 'react'
import { FaTwitter, FaDiscord, FaGlobe } from 'react-icons/fa';
import Logo from '../Logo/Logo'
import './header.css'
const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="logo">
                {/* <h1>LOGO HERE</h1> */}
                <Logo/>
            </div>
            <div className="header-btn">
                {/* <button>MINT A COLLECTION</button> */}
                <a href='https://twitter.com/VispX_official/' target='_blank' rel="noopener noreferrer"><FaTwitter /></a>
                <a href='https://discord.gg/vispx' target='_blank' rel="noopener noreferrer"><FaDiscord /></a>
                <a href='https://vispx.io/' target='_blank' rel="noopener noreferrer"><FaGlobe /></a>
            </div>
        </div>
    </header>
  )
}

export default Header