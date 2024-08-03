import {useContext} from 'react'
import {Link} from "react-router-dom"
import {FetchContext} from "./fetchContext"

const Category = () => {
  
   const {error, data, isLoad} = useContext(FetchContext)
  
  const categs = [...new Set(data.map((d) => (d.category)))]
   
  const count = {}
  data.map((d) => (d.category)).forEach(element => {
  count[element] = (count[element] || 0) + 1;
});
  
  return (
    <>
    {categs && categs.map((product) => (
      <div key={product} className="category-item">
        <div className="category-content-box">
          <div className="category-content-flex">
           <h3 className="category-item-title">{product}</h3>
           <p className="category-item-amount">({count[product]})</p>
          </div>
          <Link to={`/blogs/${product}`} className="category-btn">Show all</Link>
        </div>
      </div>))}
    </>
  )
}

export default Category