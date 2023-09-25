import React from 'react'
import './Home.css'
// import graphic from '../assets/code.png'
import animation from '../assets/codingAnime.json'
import { Link } from 'react-scroll';
import { Link as RouteLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Lottie from 'lottie-react';

export default function Home() {
  return (
    <>
      <div className='wrap-container' id='home'>
        <Fade bottom>
        <div className='content-container'>
        <span className='highlight'>
          <p><span className='highlighted'>AlgoZenith</span>,</p>
          <p>An <strong>Algorithm</strong> to become</p>
          <p><span className='highlighted'>Awesome</span> at <span className='highlighted'>DSA</span> and <span className='highlighted'>CP</span></p>
          <Link to="objectives" spy={true} smooth={true} offset={-100} duration={500}>
            <button className='register'>Know More</button>
          </Link>
          
          <RouteLink to="/register" spy={true} smooth={true} offset={-100} duration={500}>
            <button className='register' style={{'width':'230px'}}>Register for Unleashed</button>
          </RouteLink>
          
        </span>
        </div>
        <div className='image-container'>
          <Lottie animationData={animation} className='coding-image'/>
          {/* <img src={animation} alt="coding graphic" className='coding-image'/> */}
        </div>
        </Fade>
      </div>
    </>
  )
}
