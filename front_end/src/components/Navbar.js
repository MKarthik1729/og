import React from 'react'
import './home.css'
import { Link, Outlet } from 'react-router-dom'
function Navbar() {
  return (
    <div >
        <div className='nav'>
            <Link to="/"><h3>Logo</h3></Link>
            <Link to="/login"><h3>Login</h3></Link>
            <Link to="/register"><h3>SignUp</h3></Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Navbar