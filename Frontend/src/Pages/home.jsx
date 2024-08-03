import { useContext } from 'react'
import Banner from '../Components/banner'
import Category from '../Components/category'
import Productshow from '../Components/products'
import ShowCont from '../Components/showing'
import {FetchContext} from "../Components/fetchContext"


const Home = () => {
  const {error, data, isLoad} = useContext(FetchContext)
  
  
  return (
    <>
    {error && <p>{error}</p>}
    {isLoad && <p>Please wait while the page Loads. !!</p>}
      {data && ( <div className="content">
        <div className="container">
        <div className="slider-container has-scrollbar">
           <Banner />
       </div>
      </div>
      
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <Category />
        </div>
      </div>
      
      
      <div className="container">
        <div className="product-minimal">
          <Productshow Ptitle={"New Arrivals"} />
          <Productshow Ptitle={"Trending"} />
          <Productshow Ptitle={"For you"} />
        </div>
      </div>
      
      <div className="product-featured">
        <h2 className="title">Deal of the day</h2>
          <ShowCont />
      </div>
    </div>)}
      
   </>
  )
}

export default Home