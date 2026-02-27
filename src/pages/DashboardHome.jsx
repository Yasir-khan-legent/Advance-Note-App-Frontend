import React from 'react'
import '../Components/DashboardHome/temp.css'
import Notescard from '../Components/DashboardHome/Notescard.jsx'
import { isAuthenticated } from '../Service/Auth.api.js'
import { Link } from 'react-router-dom'
function DashboardHome() {

  const islogin = isAuthenticated()
  return (
    <div>
     <div className='dhmain'>
{islogin ?  (
 
  <h1><i class="fa-solid fa-people-roof"></i>  Public Notes </h1>
       

):(
  <div className='back-div'>
  <h1><i class="fa-solid fa-people-roof"></i>  Public Notes </h1>
   <Link to="/">     <button className='back'><i class="fa-solid fa-chevron-left"></i>Go To Home</button></Link>
</div>
)}
<Notescard/>
     </div>
    </div>
  )
}

export default DashboardHome
