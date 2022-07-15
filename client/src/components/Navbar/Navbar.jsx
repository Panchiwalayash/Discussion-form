import React from 'react'
import {
  Link
} from "react-router-dom";
import "./navbar.css"

const Navbar = () => {

  const user = localStorage.getItem('user')
  const logoutHandler = (e) => {
    e.preventDefault()
    localStorage.clear()
    window.location.reload()
  }
  return (
    <>
      {user ?
        <div className='Navbar'>
          <nav >
            <ul >
              <li className='title' >DISCUSSION FORM</li>
              <li >
                <Link to="/" className="home">Home</Link></li>
              <li><Link to='/trending' className='home'>Trending Question</Link></li>
            </ul>
            <button className="btn" id="btn1" onClick={logoutHandler} style={{ fontSize: "18px", color: "white", backgroundColor: "lightGreen" }}>Logout</button>


          </nav>
        </div>
        : ""}
    </>
  )
}

export default Navbar