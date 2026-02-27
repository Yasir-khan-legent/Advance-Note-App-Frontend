import React from 'react'
import './section1.css'
import { Link } from 'react-router-dom'

function Section1() {
  
  return (
    <div>
      <div className='main'>
<h1>Har Khayal, Har Pal - Likhien, Sanwarein, Mehfooz Rakhein.</h1>
<p>Smart Note aapki zarooraton ke mutabiq ek behtareen aur saaf-suthra note lene ka zariya hai. Be-rukawat (seamless) tarike se apne afkaar (thoughts) ko record karein or Apna User Experince Hmy Share kary Feedback ki Sort m Hmary Sath Attached rahy Ap Thank You...</p>
<button ><Link to='/signup'>Free Sign up Now</Link></button><br />
<span>Koi credit card zaroori nahi. Hamesha muft (free) account.</span>
      </div>
    </div>
  )
}

export default Section1
