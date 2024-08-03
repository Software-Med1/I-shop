import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {FetchContext} from "../Components/fetchContext"
import Blogsproduct from "../Components/blogsproduct"

const Blogs = () => {
  
  const {category} = useParams()
  const {rand} = useContext(FetchContext)
  const bans = rand(30)
  const [searchVal, setsearchVal] = useState("")
  const [toggle, setToggle] = useState(false)
  let data = "";
 
  if (category) {
    const cats = bans.filter((element) => {
      return element.category === category
    });
    data = [...cats]
    } else {data = [...bans]}
  
  const [Products, setProducts] = useState(data)
  

const handleSearch = (e) => {
  if (toggle == false) {e.target.value = ""}
  setsearchVal(e.target.value.toLowerCase())
  if(searchVal === "") {
    setProducts(data)
    return
  }
  let filtered = Products.filter((item) => {
  if (item.title.toLowerCase().includes(searchVal))
  {return item}
  })
  
  setProducts(filtered)
}

const handleClick = () => {
  setToggle(!toggle)
}
//useEffect(() => {
//   console.log("clicked")
// }, [handleClick])

  
  
  return (
    <>
    <div className="product-main">
    <div className="container product-up">
        <h2 className="title">New Products</h2>
        <div className="product-input">
          <input onChange={handleSearch} className={toggle ? "SearchP show" :
          "SearchP hide"} type="text" placeholder="Search Products"></input>
          <ion-icon name="search-outline" style={toggle ? {display: "none"}:
          {display:"block"}}
          onClick={handleClick}></ion-icon>
          <ion-icon name="close-outline" style={toggle ? {display: "block"}:
          {display:"none"}}
          onClick={handleClick}></ion-icon>
          
        </div>
      </div>
      
      <Blogsproduct Products={Products} />
    </div>
    </>
  )
}

export default Blogs