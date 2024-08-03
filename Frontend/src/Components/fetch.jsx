import { useState, useEffect } from 'react'

const useFetch = (url) => {
  
  const [data, setData] = useState(null)
  const [isLoad, setisLoad] = useState(true)
  const [error, setError] = useState(null)
    
  useEffect(() => {
    
    fetch(url)
    .then((res) => {
      if (!res.ok) throw Error ("unable to fetch data !!")
      return res.json()
      })
    .then((msg) => {
      setisLoad(false)
      setData(msg)
    })
    .catch((err) => {
      setisLoad(false)
      setError(err.message)
    })
  }, [url])
  return ({isLoad, data, error})
}

export default useFetch