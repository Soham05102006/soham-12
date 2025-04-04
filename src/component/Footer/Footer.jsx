import React from 'react'
import './Footer.css'
import youtube_icon from './youtube_icon.png'
import twitter_icon from './twitter_icon.png'
import instagram_icon from './instagram_icon.png'
import facebook_icon from './facebook_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
         <div className="footer-icons">
          <img src={youtube_icon} alt="" />
          <img src={twitter_icon} alt="" />
          <img src={instagram_icon} alt="" />
          <img src={facebook_icon} alt="" />
         </div>
         <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Card</li>
          <li>Media Centre</li>
          <li>Investor Relation</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Description</li>
          <li>Contact us</li>
         </ul>
         <p className='copyright-text'>© 2006-2025 Ghatole, Inc.</p>
    </div>
  )
}

export default Footer