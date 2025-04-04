import React, { useRef, useEffect, useState } from 'react'
import './Titlecard.css'
import cards_data from '../TitleCards/Cards_data'


const Titlecard = ({title, category}) => {
  
  const[ apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzY4ZmQ1NzVhOGIzNzBkZWIxMDdmYWUxOGJjNzVmZiIsIm5iZiI6MTc0MzY1ODg5MC40OTgsInN1YiI6IjY3ZWUxZjhhNDY4MGYyNmJmM2E3YTIxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NdS0YJCXi4Tx1jC6M48pUaqXfrQazEfFRgyXPS1FSmU'
    }
  };
  
  



  const handleWheel = (event)=>{
         event.preventDefault();
         cardsRef.current.scrollLeft += event.deltaX;
}
useEffect(()=>{


  fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=6c68fd575a8b370deb107fae18bc75ff', options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
   cardsRef.current.addEventListener('wheel', handleWheel);
},[])

  return (
    <div className='titlecards'>
      <h2>{title?title: "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}> 
        {apiData.map((card, index)=>{
              return <div className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+ card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </div>
        })}
      </div>
    </div>
    
  )
}

export default Titlecard