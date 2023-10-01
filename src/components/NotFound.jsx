import React from 'react'
import Lottie from 'lottie-react';
import notFound from '../assets/404.json';
import './NotFound.css';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='notfound-container'>
      <Lottie animationData={notFound} />
      <p>This is not the web page you are looking for.</p>
      <Link to="/">
        <button className='nf-button'>Go Back Home</button>       
      </Link>
    </div>
  )
}

export default NotFound
