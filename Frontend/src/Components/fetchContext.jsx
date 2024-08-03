import { createContext } from "react";
import _ from "lodash"
import useFetch from "./fetch"

export const FetchContext = createContext()

const FetchContextProvider = ({children}) => {
  
  const {isLoad, data, error} = useFetch("https://i-shop-backend.onrender.com/api/products")
  
  const dPrice = (num, e) => {
  num = num + ((num * e) / 100)
  return Math.round(num)
}
const rand = (e) => {
  return _.sampleSize(data, e)
}

  return(
  <FetchContext.Provider value={{data, error, isLoad, dPrice, rand}}>
    {children}
  </FetchContext.Provider>
  )
}

export default FetchContextProvider