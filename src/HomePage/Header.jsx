import React from 'react'
import './../index.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
    <main>
    <h1><span style={{color: 'white', backgroundColor: 'red'}}>Al</span>maBetter</h1>
    <nav>
        <Link to="/" >Resume Template</Link>
        <Link to="/myresume">My Resumes</Link>
        <Link to="/aboutus">About Us</Link>
    </nav>
    </main>
    </div>
  )
}

export default Header;
