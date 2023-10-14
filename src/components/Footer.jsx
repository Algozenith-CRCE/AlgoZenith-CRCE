import React from 'react'
import { FaInstagram,FaLinkedinIn,FaGithub,FaEnvelope } from "react-icons/fa6";
import { Link } from 'react-scroll'

import './Footer.css'
import whiteLogo from '../assets/whiteLogo.svg'


export default function Footer() {
  return (
    <footer>
      <div className='main-content'>
        <div className='identity-container'>
            <img src={whiteLogo} alt='logo' className='white-logo'/>
        </div>
        <div className='community-container'>
          <p><strong style={{'fontSize':'23px'}}>AlgoZenith Community</strong></p>
          <p style={{'margin':'0px'}}>AlgoZenith is a community-driven educational initiative designed to empower students in acquiring proficiency in DSA as well as enhancing their skills in CP.</p>
        </div>
        <div className='links-container'>
          <p><strong style={{'fontSize':'23px'}}>Useful Links</strong></p>
          <p ><Link to='home' spy={true} smooth={true} offset={-100} duration={500} className='link'>Home</Link></p>
          <p ><Link to='events' spy={true} smooth={true} offset={-100} duration={500} className='link' >Events</Link></p>
          <p ><Link to='team' spy={true} smooth={true} offset={-100} duration={500} className='link'>Team Members</Link></p>
        </div>
        <div className='contact-container'>
          <p ><strong style={{'fontSize':'23px'}}>Contact Us</strong></p>
          <div className='socials-container' style={{'marginTop':'5px'}}>
              <a href='https://www.instagram.com/algozenith_crce/'><FaInstagram className='social-icons'/></a> 
              <a href='https://www.linkedin.com/in/algozenith-crce/'><FaLinkedinIn className='social-icons'/></a>
              <a href='https://github.com/Algozenith-CRCE'><FaGithub className='social-icons'/></a>
              <a href='mailto:crce.algozenith@gmail.com'><FaEnvelope className='social-icons'/></a>
          </div>
          <p style={{'marginTop':'10px'}}>Phone: +91 72497 35828</p>
        </div>
      </div>
      <div className='credits-part'>
        <p>&#169; Copyright <strong>Algozenith CRCE.</strong> All Rights Reserved</p>
        <p>Designed and Developed by</p>
        <p className='dev-names'><a href='https://www.linkedin.com/in/alroy-pereira-2b3631248' className='link' style={{'fontSize':'1.15em'}}>Alroy Pereira</a>,<br/><a href='https://www.linkedin.com/in/aaron-pereira-878608246/' className='link'> Aaron Pereira</a>,<a href='https://www.linkedin.com/in/rudalph-gonsalves-219463257/' className='link'>Rudalph Gonsalves</a></p>
      </div>
    </footer>
  )
}
