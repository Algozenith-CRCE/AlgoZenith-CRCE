import { React } from 'react'
// import Poster from '../assets/mememania.png'; 
import './NewEvents.css';
import { Link } from 'react-router-dom';
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
              <li>UI/UX webinar</li>
              <li>Speaker: Vanshita Singh<br/>(UX Designer-Cervello)</li>
              <li>Date / Time: 30<sup>th</sup> September, 7 PM</li>
            </ul>
            <p className='event-name'>Day 2</p>
            <ul>
              <li>24 hours UI Competition</li>
              <li>Start: 1<sup>st</sup> October, 7 AM</li>
              <li>Deadline: 2<sup>nd</sup> October, 7 AM</li>
            </ul>
            <Link to='/' className='btn-wrap'>
              <button className='register-btn' style={{'display':props.display,'width':'200px'}}  >Registration shall begin soon</button>
            </Link>
            <p className='events-des'>Problem Statement will be released on our website soon & submission will be accepted through attached Google Form only.</p>
          </div>
        </Fade>
      </div>
    </>
  )
}
