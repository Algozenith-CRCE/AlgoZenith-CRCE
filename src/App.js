import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  Navigate
} from 'react-router-dom'
import  ScrollToTop  from "react-scroll-to-top";
import Fade from 'react-reveal/Fade';
import { Analytics } from '@vercel/analytics/react';


import Navbar from './components/Navbar'
import Home from './components/Home'
import Objective from './components/Objective';
import Events from './components/Events';
import Footer from './components/Footer';
import Register from './components/Register';
import NewEvents from './components/NewEvents';
import BackBtn from './components/BackBtn';
import ScrollTop from './components/ScrollTop';
import Contact from './components/Contact';
import NotFound from './components/NotFound'
import Teammember from "./components/Teammembers";

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
              <Footer />
          </>
        }/>
        {/* <Route exact path='/register' element={
          <>
            <NotFound />
            <Navigate to="/"/>
          </>
        }/>*/}
        <Route exact path='/register' element={
          <>
            <BackBtn />
            <Fade bottom>
              <NewEvents display='none' margin='80px'/>
              <Register />
            </Fade>
          </>
        }/> 
        <Route path="*" element={
          <>
            <NotFound />
          </>
        } />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
