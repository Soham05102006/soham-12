import React from 'react'
import './Home.css'
import Navbar from '../../component/NavBar/Navbar'
import hero_banner from './hero_banner.jpg'
import hero_title from './hero_title.png'
import hero_play from './play_icon.png'
import info_icon from './info_icon.png'
import Titlecard from '../../component/TitleCards/Titlecard'
import Footer from '../../component/Footer/Footer'


const Home = () => {
  return (
    <div className='home'>
         <Navbar />
         
         <div className="Hero">
          <img src={hero_banner} alt=""  className='banner-img'/>
          <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy.</p>
             <div className="hero-btns">
                <button className='btn'><img src={hero_play} alt="" />Play</button>
                <button className='btn dark-btn'><img src={info_icon} alt="" />More info</button>
             </div>
             <Titlecard />
           </div>
           
         </div>
       <div className="more-cards">
       <Titlecard title={"Blockbuster Movie"}/>
       <Titlecard title={"Only on Netflix"}/>
       <Titlecard title={"Upcoming"}/>
       <Titlecard title={"Top pics for You"}/>
       </div>
       <Footer />
    </div>
  )
}

export default Home