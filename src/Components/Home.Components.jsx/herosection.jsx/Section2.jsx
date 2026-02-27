import React from 'react'
import './Section2.css'
import { Link } from 'react-router-dom'
function Section2() {
  return (
    <div>
      <div className='main2'>
<h1>Hamara App Kia Kerta H </h1>
<div className='cardcontainer'>
<div className='card'>
    <h3><i class="fa-solid fa-arrow-trend-down"></i></h3>
    <h2>Saaf Aur Sober Design</h2>
    <p>Aapke dimaag ko sukoon dene wala interface. Bina kisi distraction ke notes likhen. Har cheez wazeh aur apni jagah par hai.</p>
</div>

<div className='card'>
    <h3><i class="fa-solid fa-arrow-trend-up"></i></h3>
    <h2>Saaf Aur Sober Design</h2>
    <p>Aapke dimaag ko sukoon dene wala interface. Bina kisi distraction ke notes likhen. Har cheez wazeh aur apni jagah par hai.</p>
</div>

<div className='card'>
    <h3><i class="fa-solid fa-lock"></i></h3>
    <h2>Saaf Aur Sober Design</h2>
    <p>Aapke dimaag ko sukoon dene wala interface. Bina kisi distraction ke notes likhen. Har cheez wazeh aur apni jagah par hai.</p>
</div>
<div className='card'>
    <h3><i class="fa-solid fa-floppy-disk"></i></h3>
    <h2>Saaf Aur Sober Design</h2>
    <p>Aapke dimaag ko sukoon dene wala interface. Bina kisi distraction ke notes likhen. Har cheez wazeh aur apni jagah par hai.</p>
</div>
</div>
<div className='box'>
<div className='mainbox'>
<h1>Kya Aap Tayyar Hain?</h1>
<p>Apne khayalon ko naye tareeqe se sanwarein. Aaj hi Smart Note ki duniya mein shamil ho jayein.
</p>
<button><Link to='/signup'>Muft Account Banayein</Link> </button>
</div>
</div>
      </div>
    </div>
  )
}

export default Section2
