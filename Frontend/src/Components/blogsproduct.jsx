import React from 'react'
import { useContext } from 'react'
import {Link} from "react-router-dom"
import {FetchContext} from "./fetchContext"

const Blogsproduct = ({Products}) => {
  
  const {error, isLoad, dPrice, rand} = useContext(FetchContext)

  
  return (
    <>
    
    {error && <div className="error">{error}</div>}
    {isLoad && <div className="load">Please wait while the page Loads </div>}
    
    <div className="product-grid">
    {Products && Products.map((product) => (
      <div key={product.id} className="showcase">
        <div className="showcase-banner">
                  <img src={product.images[0]} alt={product.title} className="product-img default"
                    width="300" />
                  <img src={product.images[1]} alt={product.title}
                  className="product-img hover"
                    width="300" />
              
                  <div className="showcase-actions">
                    <button className="btn-action">
                      <ion-icon name="heart-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="eye-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="repeat-outline"></ion-icon>
                    </button>
              
                    <button className="btn-action">
                      <ion-icon name="bag-add-outline"></ion-icon>
                    </button>
                  </div>
                </div>
              
                <div className="showcase-content">
                  <Link to={`/blog/${product.id}`}
                  className="showcase-category">{product.title}</Link>
              
                  <h3>
                    <Link to={`/blog/${product.id}`}
                    className="showcase-title">{product.description}</Link>
                  </h3>
              
                  <div className="showcase-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star-outline"></ion-icon>
                  </div>
              
                  <div className="price-box">
                    <p className="price">${product.price}</p>
                    <del>${dPrice(product.price, product.discountPercentage)}</del>
                  </div>
              
                </div>
              
              </div>))}
            </div>
    </>
  )
}

export default Blogsproduct