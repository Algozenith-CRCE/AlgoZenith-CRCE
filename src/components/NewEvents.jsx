import { React } from 'react'
// import Poster from '../assets/mememania.png'; 
import './NewEvents.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import comingSoon from '../assets/comingSoon.png'

export default function newEvents(props) { 
  return (
    <>
      <div className='wrap-register' style={{'marginTop':props.margin}}>
        <Fade bottom>
          <div className='poster-container'>
            <img src={comingSoon} alt="Event-Poster" className='event-poster'/>
          </div>
          <div className='register-div'>
            <p className='event-name'>Coming Soon</p>
            {/* <ul>
              <li>Speaker: ...</li>
              <li>Timing: ...</li>
              <li>Venue: ...</li>
            </ul> */}
            <Link to='/register'>
              <button className='register-btn' style={{'display':props.display}}  disabled>Register</button>
            </Link>
          </div>
        </Fade>
      </div>
    </>
  )
}
