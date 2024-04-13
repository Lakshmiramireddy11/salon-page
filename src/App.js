import { React,useState} from 'react'
import './App.css';
import logo from './logo.png'
import icon from './icon.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot} from '@fortawesome/free-solid-svg-icons'
import {faMenu} from '@fortawesome/free-solid-svg-icons'

import dates from './dates.png'
import timings from './timings.png'

function App() {
     const [isMobile,setIsMobile] =useState(false)
  
  return (
    <>
     <nav>
        <div className='logo'>
           <img src={logo} alt='sample'/>
        </div>
        <button className='mobile-menu-icon' onClick={()=>setIsMobile(!isMobile)}>
         { isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i> }
        </button>
        <ul className= {isMobile ? 'nav-links-mobile' : "menu"}>
          <li>HOME</li>
          <li>SALON</li>
          <li>SHOP</li>
          <li>ABOUT US</li>
        </ul>
       <div className='icon'>
       <img src={icon} alt='sample'/>
       </div>
      </nav>
      <div className='main-section'>
        <div className='section-1'>
          <div className='sub-1'><p>salons  salon details  date&time</p></div>
          <div className='sub-2'>
            <h1>Bounce salon & spa</h1></div>
            <h5>Banjara Hills,Hyderabad <FontAwesomeIcon icon={faLocationDot}/></h5>
            <h5>services selected</h5>
          <ul>
            <li>Hair cut</li>
            <li>Facial</li>
            <li>Spa</li>
          </ul>
          <div>
          <h5>Date</h5>
          <p>12/4//24</p>
          </div>
          <div>
          <h5>Time</h5>
          <p>11:00AM to 12:00PM</p>
          </div>
        </div>
        
        <div className='section-2'>
          <div className='dates'><img src={dates} alt='sample' /></div>
          <button className='btn'>Proceed To Checkout</button>
        </div>
        <div className='section-3'>
          <div className='timings'>
            <img src={timings} alt='sample'/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
