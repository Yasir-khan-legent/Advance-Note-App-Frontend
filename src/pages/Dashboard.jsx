import React from 'react'
import Sidebar from '../Components/Dashboard/sidebar.jsx'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='maindiv'>
      <Sidebar/>
            <main className="main-content">
        <Outlet/>
      </main>

    </div>
  )
}

export default Dashboard
