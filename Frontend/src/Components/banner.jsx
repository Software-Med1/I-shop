import React from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom"
import {FetchContext} from "./fetchContext"

const Banner = () => {
  
  const {error, data, isLoad, rand} = useContext(FetchContext)
  const bans = rand(5)
  
  return (
    
    <>
    {bans && bans.map((element) => (
      <div key={element.id} className="slider-item">
        <img src={element.images[0]} alt={element.title} className="banner-img" />
        <div className="banner-content">
          <p className="banner-subtitle">Trending item</p>
          <h2 className="banner-title">{element.title}</h2>
          <p>Our Price $<b>{element.price}.00</b></p>
          <Link to={`/blog/${element.id}`} className="banner-btn" >Shop now</Link>
        </div>
      </div>))}
      </>
  )
}

export default Banner