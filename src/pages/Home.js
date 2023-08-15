import React from 'react'
import FoodCard from '../components/FoodCard'
import requests from '../Requests'
import Test from '../Test'

const Home = () => {
  console.log(requests.requestChicken)
  return (
    <>
      <div className='md:flex mt-[84px]'>
        <div className='md:w-1/2'>
          <Test />
        </div>
        <div className='md:w-1/2 '>
          <h2 className='p-2 text-3xl font-medium'>Winner Winner Chicken Dinner !!!</h2>
          <FoodCard fetchURL={requests.requestChicken} />
        </div>
      </div>
    </>
  )
}

export default Home
