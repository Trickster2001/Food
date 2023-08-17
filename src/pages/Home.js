import React, { useEffect, useState } from 'react'
import FoodCard from '../components/FoodCard'
import requests from '../Requests'
import Test from '../Test'
import axios from 'axios'

const Home = () => {
  const url = requests.requestChicken
  console.log(url)
  const [chicken, setChicken] = useState([])

  useEffect(()=>{
    axios.get(url).then((res)=>{
      console.log(res.data.results)
      let my = res.data.results
      setChicken(my)
      console.log("chicken is", chicken)
    })
  },[])
  return (
    <>
      <div className='md:flex mt-[84px]'>
        <div className='md:w-1/2'>
          <Test />
        </div>
        <div className='md:w-1/2'>
          <h2 className='p-2 text-3xl font-medium'>Winner Winner Chicken Dinner !!!</h2>
          <FoodCard chicken={chicken} />
        </div>
      </div>
    </>
  )
}

export default Home
