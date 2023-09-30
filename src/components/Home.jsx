import React from 'react'
import './Home.css'
// import graphic from '../assets/code.png'
import animation from '../assets/codingAnime.json'
import { Link } from 'react-scroll';
// import { Link as RouteLink } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Lottie from 'lottie-react';
import  { useState, useEffect } from 'react';

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
            <span className='highlight'>
            <p><span className='highlighted' >Algozenith Unleashed</span> webinar is <strong>Live</strong></p>
            <a href=' https://meet.google.com/dvi-gror-jff'><button className='register' style={{'width':'230px','backgroundColor': buttonColor,'color':'darkgreen','transition':'0.3s ease','scale':scale}}>Join Now</button></a>  
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
