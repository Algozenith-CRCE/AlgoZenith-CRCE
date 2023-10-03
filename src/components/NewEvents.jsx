import { React } from 'react'
import { Link } from 'react-router-dom';
import './NewEvents.css';
import Fade from 'react-reveal/Fade';
import ss from '../assets/unleashed.jpeg'
import Lottie from 'lottie-react';
import Timer from '../assets/comingAnime.json'

export default function newEvents(props) { 
  return (
    <>
      <Fade bottom>
        <div className='wrap-register' style={{"flexDirection":"column"}}>
          <Fade bottom>
            <span className='highlight' style={{"textAlign":"center"}}>
              <p><span className='highlighted' style={{"fontSize":"25px"}}>Congratulations to all the Winners of Algozenith Unleashed🎉✨</span> </p>
              <p className='names' style={{"fontSize":"20px"}}>1<sup>st</sup> Prize🥇: <strong>Mr. Vivian Ludrik</strong></p>
              <p className='names' style={{"fontSize":"20px"}}>2<sup>nd</sup> Prize🥈: <strong>Mr. Rishabh Pathak</strong></p>
            </span>
          <div className='content-container' style={{"marginTop":"15px"}}>
          </div>
          {/* <Lottie animationData={Timer} className='coming-image'/> */}
            {/* <div className='poster-container'>
              <img src={ss} alt="Event-Poster" className='event-poster'/>
            </div> */}
            {/* <div className='register-div'>
              <ul style={{"listStyle":'none'}}>
                <li className='event-name'><span>UI/UX Webinar</span></li>
                <li><strong></strong></li>
                <li><strong>Speaker:</strong> Vanshita Singh (UX Designer-Cervello)</li>
                <li><strong>Date:</strong> 30<sup>th</sup> September 2023</li>
                <li><strong>Time:</strong> 7 PM</li>
                <li><strong>Link:</strong> <a href='https://meet.google.com/dvi-gror-jff' style={{'textDecoration': 'underline'}}>https://meet.google.com/dvi-gror-jff</a></li>
              </ul>
              <ul style={{"listStyle":'none'}}>
                <li className='event-name'><span>24 hours UI Competition</span></li>
                <li><strong></strong></li>
                <li><strong>Deadline:</strong> <span style={{'color':"#800000"}}><strong>2<sup>nd</sup> October, 7 AM</strong></span></li>
                <li id='problem-statement' className='highlight' style={{"backgroundColor":"#ddf1fff7","marginTop":"15px","marginBottom":"20px","padding":"20px"}}><strong>Problem Statement:</strong><br/>Create front-end for a luxury fashion e-commerce retailer targeting high-end fashion enthusiasts. Utilize HTML, CSS, JavaScript, or your preferred framework (e.g., React, Angular, or Vue.js) to design a responsive and visually stunning landing page. Prioritize smooth navigation, engaging designer profiles, user interactions (reviews and ratings).</li>
              </ul>
                <div style={{'display':'flex','alignItems':'center','justifyContent':'center'}}><a href='https://forms.gle/A1DdvV9LQ2DW92357'>
                  <button className='register-btn' style={{'display':props.display}}  >Submission Link</button></a></div>
              <Link to='/register' className='btn-wrap'>
                <button className='register-btn' style={{'display':props.display}}  >Register</button>
              </Link>
            </div> */}
          </Fade>
        </div>
        <h1 style={{'textAlign':'center','color':'#2295f4','marginTop':props.margin}}>Thank You for Participating in AlgoZenith Unleashed!</h1>
      </Fade>
    </>
  )
}
