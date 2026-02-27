import React, { useEffect, useState } from "react";
import "./Sidebar.css";   // <-- CSS import
import { Link, NavLink } from "react-router-dom";
import { Getname } from "../../Service/Api";
import { isAuthenticated } from "../../Service/Auth.api";

function Sidebar() {
const [name,setname]=useState("")
const islogin = isAuthenticated()

async function getuser() {
  try {
    const res = await Getname()
    console.log(res)
    setname(res.data.name)
  } catch (error) {
    console.log("Frontend error",error)
  }
}
useEffect(()=>{
getuser()
},[])

  return (
    <div className="dashboard-container">
      
      
      <aside className="sidebar">
<div>
          <div className="mainlogo">
<span><i class="fa-solid fa-book-open-reader"></i></span>
        <div className='slogo'>Smart Notes</div>
        </div>
       
<ul className="menu">
  <NavLink to="/dashboard" end className="nav-link">
    <li>
      <i className="fa-regular fa-house"></i>
      <span>Public Notes</span>
    </li>
  </NavLink>
{islogin ?(
    <NavLink to="/dashboard/mynotes" className="nav-link">
    <li>
      <i className="fa-solid fa-book"></i>
      <span>MY Notes</span>
    </li>
  </NavLink>
):(
   <NavLink to="/login" className="nav-link">
    <li>
      <i className="fa-solid fa-book"></i>
      <span>MY Notes</span>
    </li>
  </NavLink>
)}


{islogin ?(
     <NavLink to="/dashboard/savenote" className="nav-link">
    <li>
      <i className="fa-regular fa-floppy-disk"></i>
      <span>Save Notes</span>
    </li>
  </NavLink>
):(
    <NavLink to="/login" className="nav-link">
    <li>
      <i className="fa-regular fa-floppy-disk"></i>
      <span>Save Notes</span>
    </li>
  </NavLink>
)}


  {/* <NavLink to="/dashboard/mynotes" className="nav-link">
    <li>
      <i className="fa-solid fa-book"></i>
      <span>MY Notes</span>
    </li>
  </NavLink> */}
{/* 
  <NavLink to="/dashboard/savenote" className="nav-link">
    <li>
      <i className="fa-regular fa-floppy-disk"></i>
      <span>Save Notes</span>
    </li>
  </NavLink> */}

  {/* <NavLink to="/dashboard/profile" className="nav-link">
    <li>
      <i className="fa-regular fa-user"></i>
      <span>Profile</span>
    </li>
  </NavLink> */}
</ul>

</div>


{islogin ?(
     <div className="profile">
         <i class="fa-regular fa-circle-user"></i>
         <NavLink to="/dashboard/profile" className="nav-link">
    
<p> {name.
          length > 15
                  ? name.slice(0, 15) + ".."
                  : name}</p>
  </NavLink>
        </div>
):(
<h1 className="login-btn"><Link to="/login"><i class="fa-solid fa-right-to-bracket"></i> Login</Link></h1>
)}
       
      </aside>


    </div>
  );
}

export default Sidebar;


{/* <p> {name.
          length > 15
                  ? name.slice(0, 15) + ".."
                  : name}</p> */}