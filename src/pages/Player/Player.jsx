import React from 'react'
import './Player.css'
import back_arrow_icon from './back_arrow_icon.png'
const Player = () => {
  return (
    <div className='player'>
         <img src={back_arrow_icon} alt="" />
         <iframe width='90%' height='90%'
         src='https://nextflick.tv/'
         title='trailer' frameBorder='0' allowFullScreen></iframe>
         <div className="player-info">
          <p>Published </p>
          <p>movie</p>
          <p>hollywood</p>
         </div>
    </div>
  )
}

export default Player