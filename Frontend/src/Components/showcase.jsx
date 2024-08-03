import react from "react"
import { useContext } from 'react'
import {Link} from "react-router-dom"
import {FetchContext} from "./fetchContext"

const Showcase = () => {
  
  const {error, data, isLoad, rand, dPrice} = useContext(FetchContext)
  const bans = rand(5)
  
  
  
  return (
    <>
    {bans && bans.map((element) => (
      <div key={element.id} className="showcase">
        <Link to={`/blog/${element.id}`} className="showcase-img-box">
          <img src={element.thumbnail} alt={element.title} className="showcase-img"
            width="70" />
        </Link>
        <div className="showcase-content">
          <Link to={`/blog/${element.id}`}>
            <h4 className="showcase-title">{element.title}</h4>
          </Link>
          <Link to={`/blog/${element.id}`}
          className="showcase-category">{element.category}</Link>
          <div className="price-box">
            <p className="price">${element.price}</p>
            <del>${dPrice(element.price, element.discountPercentage)}</del>
          </div>
        </div>
      </div>))}
    </>
  )
}

export default Showcase