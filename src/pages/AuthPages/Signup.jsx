import React, { useState } from 'react'
import Section3 from '../../Components/Home.Components.jsx/herosection.jsx/section3'
import './signup.css'
import { Link,useNavigate } from 'react-router-dom'
import { signup } from '../../Service/Auth.api.js'
function Signup() {
    const [isshow , setshow] = useState(false)
    const [name,setname]= useState('')
    const [email,setemail]= useState('')
    const [password,setpassword]= useState('')
const navigate  = useNavigate()

    const data = {name,email,password}

    async function handlesubmit(){
     
      try {
        const result = await signup(data)
console.log(result)
navigate('/login')
      } catch (error) {
       console.log('Signup Error',error.message) 
      }
    }
   
  return (
    <div>
        <h1 className='auth-head'><span><Link to='/'><i class="fa-solid fa-book-open-reader"></i></Link></span>Smart Notes</h1>
        <div className='barmain'>
            <div className='bar'></div>
        </div>
      <div className='signupmain'>
<div className='container'>
    <h2><i class="fa-solid fa-circle-user"></i></h2>
<h1>Create Your Account</h1>
  <div class="form-row">
    <label for="name" class="form-label">Name</label>
    <input onChange={(e)=>setname(e.target.value)} name="name" type="text" class="form-input" placeholder="Your name" required />
    <div class="form-help" id="nameHelp">Enter full name</div>
  </div>

  <div class="form-row">
    <label for="email" class="form-label">Email</label>
    <input id="email" onChange={(e)=>setemail(e.target.value)}  name="email" type="email" class="form-input" placeholder="you@example.com" required />
    <div class="form-help" id="emailHelp">We'll never share your email.</div>
  </div>

  <div class="form-row">
    <label for="password" class="form-label">Password</label>
    <div class="input-with-btn">
      <input id="password" onChange={(e)=>setpassword(e.target.value)}  name="password" type={isshow ? "text" : "password"} class="form-input" placeholder="Create a password" required />
      <button type="button" class="show-btn" onClick={()=> setshow(!isshow)}>{isshow?<i class="fa-solid fa-eye"></i>: <i class="fa-solid fa-eye-slash"></i> }</button>
    </div>
    <div class="form-help" id="passwordHelp">Min 8 characters.</div>
  </div>

  <div class="form-actions">
    <button onClick={handlesubmit} class="submit-btn1">Sign Up</button>
  </div>
  <p className='already' >Already have an account <Link style={{color:"blue"}} to='/login'>Login</Link></p>
</div>
      </div>
      <Section3/>
    </div>
  )
}

export default Signup
