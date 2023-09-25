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
      <div className='wrap-register' style={{'marginTop':props.margin}}>
        <Fade bottom>
          <div className='poster-container'>
            <img src={ss} alt="Event-Poster" className='event-poster'/>
          </div>
          <div className='register-div'>
            {/* <Lottie animationData={Timer} className='coming-image'/> */}
            <p className='event-name'>Day 1</p>
            <ul>
              <li>UI/UX Webinar</li>
              <li>Speaker: Vanshita Singh<br/>(UX Designer-Cervello)</li>
              <li>Date / Time: 30<sup>th</sup> September, 7 PM</li>
              <li>Link: <a href='https://meet.google.com/dvi-gror-jff' style={{'textDecoration': 'underline'}}>https://meet.google.com/dvi-gror-jff</a></li>
            </ul>
            <p className='event-name'>Day 2</p>
            <ul>
              <li>24 hours UI Competition</li>
              <li>Start: 1<sup>st</sup> October, 7 AM</li>
              <li>Deadline: 2<sup>nd</sup> October, 7 AM</li>
            </ul>
            <Link to='/register' className='btn-wrap'>
              <button className='register-btn' style={{'display':props.display}}  >Register</button>
            </Link>
            <p className='events-des'>Problem Statement will be released on our website soon & submission will be accepted through attached Google Form only.</p>
          </div>
        </Fade>
      </div>
    </>
  )
}
