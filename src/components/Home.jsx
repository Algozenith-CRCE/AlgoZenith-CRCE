import React from 'react'
import './Home.css'
// import graphic from '../assets/code.png'
import animation from '../assets/codingAnime.json'
import { Link } from 'react-scroll';
// import { Link as RouteLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Lottie from 'lottie-react';
import  { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export default function Home() {
  
  const colors = ["#FFFEC4","#CBFFA9"];
  const scaleArray = ["1","1.05"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const [scaleIndex, setScaleIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentColorIndex + 1) % colors.length;
      setCurrentColorIndex(nextIndex);
    }, 700);

    return () => clearTimeout(timer);
  }, [currentColorIndex, colors]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (scaleIndex + 1) % scaleArray.length;
      setScaleIndex(nextIndex);
    }, 700);

    return () => clearTimeout(timer);
  }, [scaleIndex, scaleArray]);

  const buttonColor = colors[currentColorIndex];
  const scale = scaleArray[scaleIndex];

  return (
    <>
      <div className='wrap-container' id='home'>
        <Fade bottom>
        <span>
        <div className='content-container'>
            <Confetti  className='confetti' />
            <span className='highlight' style={{"textAlign":"center"}}>
            <p><span className='highlighted' style={{"fontSize":"25px"}}>Congratulations to all the Winners of Algozenith Unleashed🎉✨</span> </p>
            <p className='names' style={{"fontSize":"20px","lineBreak":"auto"}}>1<sup>st</sup> Prize🥇</p>
            <p className='names' style={{"fontSize":"20px","lineBreak":"auto"}}> <strong>Mr. Vivian Ludrik</strong></p>
            <p className='names' style={{"fontSize":"20px"}}>2<sup>nd</sup> Prize🥈</p>
            <p className='names' style={{"fontSize":"20px"}}><strong>Mr. Rishabh Pathak</strong></p>
            {/* <p style={{'fontSize':'1.7rem'}}>24h UI Competition is <strong style={{"color":"#FF0B0B"}}>Live</strong></p>
            <p style={{'fontSize':'1.4rem'}}><strong>Deadline:</strong> <span style={{'color':"#800000"}}><strong>2<sup>nd</sup> October, 7 AM</strong></span></p>
            <Link to='problem-statement' spy={true} smooth={true} offset={-200} duration={500}><button className='register' style={{'width':'230px','backgroundColor': buttonColor,'color':'darkgreen','transition':'0.3s ease','scale':scale}}>Problem Statement</button></Link>
            <a href='https://forms.gle/A1DdvV9LQ2DW92357'>
              <button className='register'>Submission Link</button>
            </a>   */}
          </span>
          </div>
          <div className='content-container' style={{"marginTop":"15px"}}> 
          <span className='highlight'>
            <p><span className='highlighted'>AlgoZenith</span>,</p>
            <p>An <strong>Algorithm</strong> to become</p>
            <p><span className='highlighted'>Awesome</span> at <span className='highlighted'>DSA</span> and <span className='highlighted'>CP</span></p>
            <Link to="objectives" spy={true} smooth={true} offset={-100} duration={500}>
              <button className='register'>Know More</button>
            </Link>
            <Link to="events" spy={true} smooth={true} offset={-100} duration={500}>
              <button className='register'>Events</button>
            </Link>
            </span>
          </div>
        </span>
        <div className='image-container'>
          <Lottie animationData={animation} className='coding-image'/>
          {/* <img src={animation} alt="coding graphic" className='coding-image'/> */}
        </div>
        </Fade>
      </div>
    </>
  )
}
