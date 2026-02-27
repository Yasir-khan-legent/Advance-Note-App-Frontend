import React, { useState } from 'react'
import './signup.css'
import { Link,useNavigate } from 'react-router-dom'
import Section3 from '../../Components/Home.Components.jsx/herosection.jsx/section3'
import { login } from '../../Service/Auth.api.js'
import { toast } from 'react-toastify'
function Login() {
 const [isshow , setshow] = useState(false)
   const [email,setemail] = useState('')
   const [password,setpassword] = useState('')
const navigate  = useNavigate()

const data = {email,password}
   async function handlelogin() {
    try {

      const result = await login(data)
    if(result.status === 200){
      toast.success(result.data.message || "Login Successful! 🎉")
      setemail('')
      setpassword('')
      localStorage.setItem('Token', result.data.token)
      navigate('/dashboard')
    }

    } catch (error) {
          toast.error("Login Failed ❌")
      console.log('Frontend login error ' ,error.message)
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
<h1>Login Your Account</h1>
  
  <div class="form-row">
    <label for="email" class="form-label">Email</label>
    <input onChange={(e)=> setemail(e.target.value)}  value={email}id="email" name="email" type="email" class="form-input" placeholder="you@example.com" required />
    <div class="form-help" id="emailHelp">We'll never share your email.</div>
  </div>

  <div class="form-row">
    <label for="password" class="form-label">Password</label>
    <div class="input-with-btn">
      <input onChange={(e)=> setpassword(e.target.value)} value={password} id="password" name="password" type={isshow ? "text" : "password"} class="form-input" placeholder="Create a password" required />
      <button type="button" class="show-btn" onClick={()=> setshow(!isshow)}>{isshow?<i class="fa-solid fa-eye"></i>: <i class="fa-solid fa-eye-slash"></i> }</button>
    </div>
    <div class="form-help" id="passwordHelp">Min 8 characters.</div>
  </div>

  <div class="form-actions">
    <button onClick={handlelogin} class="submit-btn1">Login</button>
  </div>
  <p className='already' >Create account <Link style={{color:"blue"}} to='/signup'>Signup</Link></p>
</div>
      </div>
      <Section3/>
    </div>
  )
}

export default Login
