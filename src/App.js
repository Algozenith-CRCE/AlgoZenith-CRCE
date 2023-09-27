import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Objective from './components/Objective';
import Events from './components/Events';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Register from './components/Register';
import NewEvents from './components/NewEvents';
import BackBtn from './components/BackBtn';
import ScrollTop from './components/ScrollTop';
import Contact from './components/Contact';
import  ScrollToTop  from "react-scroll-to-top";
import Teammember from "./components/Teammembers";
import Fade from 'react-reveal/Fade';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <Router>  
      <ScrollToTop smooth class="scroll-to-top-button" color='navy' width='20px' height='20px' />
      <ScrollTop /> 
      <Routes>
        <Route exact path='/' element={
          <>
            <Navbar/>
            <Home />
            <Fade bottom>
              <Objective />
              <Events />
              <Teammember />
            </Fade>
            <Contact />
          </>
        }/>
        <Route exact path='/register' element={
          <>
            <BackBtn />
            <Fade bottom>
              <NewEvents display='none' margin='100px'/>
              <Register />
            </Fade>
          </>
        }/>
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
