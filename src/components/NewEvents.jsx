import { React } from 'react'
// import Poster from '../assets/mememania.png'; 
import { Link } from 'react-router-dom';
import './NewEvents.css';
import Fade from 'react-reveal/Fade';
import ss from '../assets/unleashed.jpeg'
// import Lottie from 'lottie-react';
// import Timer from '../assets/comingAnime.json'

export default function newEvents(props) { 
  return (
    <>
      <h1 style={{'textAlign':'center','color':'#2295f4','marginTop':props.margin}}>AlgoZenith Unleashed</h1>
      <div className='wrap-register'>
        <Fade bottom>
          <div className='poster-container'>
            <img src={ss} alt="Event-Poster" className='event-poster'/>
          </div>
          <div className='register-div'>
            {/* <Lottie animationData={Timer} className='coming-image'/> */}
            <ul style={{"listStyle":'none'}}>
              <li className='event-name'><span>Day 1</span></li>
              <li><strong>UI/UX Webinar</strong></li>
              <li><strong>Speaker:</strong> Vanshita Singh (UX Designer-Cervello)</li>
              <li><strong>Date:</strong> 30<sup>th</sup> September 2023</li>
              <li><strong>Time:</strong> 7 PM</li>
              <li><strong>Link:</strong> <a href='https://meet.google.com/dvi-gror-jff' style={{'textDecoration': 'underline'}}>https://meet.google.com/dvi-gror-jff</a></li>
            </ul>
            <ul style={{"listStyle":'none'}}>
              <li className='event-name'><span>Day 2</span></li>
              <li><strong>24 hours UI Competition</strong></li>
              <li><strong>Start:</strong> 1<sup>st</sup> October, 7 AM</li>
              <li><strong>Deadline:</strong> 2<sup>nd</sup> October, 7 AM</li>
            </ul>
            <Link to='/register' className='btn-wrap'>
              <button className='register-btn' style={{'display':props.display}}  >Register</button>
            </Link>
          </div>
            <p className='events-des'>Problem Statement will be released on our website soon & submission will be accepted through attached Google Form only.</p>
        </Fade>
      </div>
    </>
  )
}
