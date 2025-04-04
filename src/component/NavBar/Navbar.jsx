import React from 'react'
import './Navbar.css'
import logo from './logo.png' 
import search from './search_icon.svg'
import Bell from './bell_icon.svg'
import profile from './profile_img.png'
import caret from './caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className="navbar-left">
           <img src={logo} alt="Logo" />
           <ul className='list'>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Brows by language</li>
           </ul>
       </div>
       <div className="navbar-right">
        <img src={search} alt="" className='icons'/>
        <p>Children</p>
        <img src={Bell} alt="" className='icons'/>
        <div className="navbar_profile">
          <img src={profile} alt="" className='profile' />
          <img src={caret} alt="" />
          <p className='dropdown'>sign out of Netflix</p>
        </div>
       </div>
    </div>
  )
}

export default Navbar