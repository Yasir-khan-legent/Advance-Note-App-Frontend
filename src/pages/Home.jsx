import React from 'react'
import Navbar from '../Components/Home.Components.jsx/Navbar/Navbar'
import Section1 from '../Components/Home.Components.jsx/herosection.jsx/section1'
import Section2 from '../Components/Home.Components.jsx/herosection.jsx/Section2'
import Section3 from '../Components/Home.Components.jsx/herosection.jsx/section3'


function Home() {
  return (
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
    </div>
  )
}

export default Home
