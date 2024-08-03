import React from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom"
import {FetchContext} from "./fetchContext"

const ShowCont = () => {
  
  const {error, data, dPrice, isLoad, rand} = useContext(FetchContext)
  const bans = rand(2)
    
  return (
    <div className="showcase-wrapper has-scrollbar">
    {bans && bans.map((element) => (
      <div key={element.id} className="showcase-container">
                <div className="showcase">
                  <div className="showcase-banner">
                    <img src={element.images[0]} alt={element.title}
                    className="showcase-img" />
                  </div>
                  <div className="showcase-content">
                    <div className="showcase-rating">{element.rating}
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star-outline"></ion-icon>
                    </div>
                    <Link to={`/blog/${element.id}`}>
                      <h3 className="showcase-title">{element.title}</h3>
                    </Link>
                    <p className="showcase-desc">
                      {element.description}
                    </p>
                    <div className="price-box">
                      <p className="price">${element.price}</p>
                      <del>${dPrice(element.price, element.discountPercentage)}</del>
                    </div>
                    <button className="add-cart-btn">add to cart</button>
                    <div className="showcase-status">
                      <div className="wrapper">
                        <p>
                          already sold: <b>200</b>
                        </p>
                        <p>
                          available: <b>470</b>
                        </p>
                      </div>
                      <div className="showcase-status-bar"></div>
                    </div>
                    <div className="countdown-box">
                      <p className="countdown-desc">
                        Hurry Up! Offer ends in:
                      </p>
                      <div className="countdown">
                        <div className="countdown-content">
                          <p className="display-number">30</p>
                          <p className="display-text">Days</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">28</p>
                          <p className="display-text">Hours</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">54</p>
                          <p className="display-text">Min</p>
                        </div>
                        <div className="countdown-content">
                          <p className="display-number">09</p>
                          <p className="display-text">Sec</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>))}
    </div>
  )
}

export default ShowCont