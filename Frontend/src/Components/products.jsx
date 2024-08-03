import React from 'react'
import Showcase from './showcase'

const Productshow = ({Ptitle}) => {
  return (
      <div className="product-showcase">
            <h2 className="title">{Ptitle}</h2>
            <div className="showcase-wrapper has-scrollbar">
                <div className="showcase-container">
                  <Showcase />
                </div>
                <div className="showcase-container">
                  <Showcase />
                </div>
            </div>
          </div>
  )
}

export default Productshow