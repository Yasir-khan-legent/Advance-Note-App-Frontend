import React from 'react'
import { Createnotes } from '../../../Service/Api'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {


async function postdata() {
  try {
    const data = {
      title:'Abc',
      note:'12345',
      status:'Pending',

    }

    const result =await Createnotes(data)
    console.log(result.data)
  } catch (error) {
    console.log('error agya h ',error.message)
  }
}
  
  return (
    <div>
<div className='navbar'>
  <div className='logo'><span><i class="fa-solid fa-book-open-reader"></i></span>Smart Notes</div>
  <div className='links'>
    <Link to='/'>Home</Link>
    <Link to="/about">About</Link>
    <Link to="/dashboard">Notes</Link>
    <Link to='/contact'>Contact</Link>

    <button><i class="fa-solid fa-right-to-bracket"></i> <Link to='/login'>Login</Link></button>
    <span className='mlogin'><i class="fa-solid fa-right-to-bracket"></i></span>
  </div>
</div>

    </div>
  )
}

export default Navbar
