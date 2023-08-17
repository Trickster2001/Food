import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
import Recipe from './Recipe'
const apiKey = 'b8a0168936974549b29e0d940345f183'


const FoodCard = ({chicken}) => {

  return (
    <>
    
    <a href="/recipe/123">Hello</a>
      <div className='relative grid sm:grid-cols-2 bg-black '>
        {chicken.map((res)=>{
          return (
            <div key={res.id}>
              <section className='bg-red-400'>
                <Link to={`/recipe/${res.id}`} >
                  <img className='w-full p-4' src={res.image} alt={res.title} />
                </Link>
              </section>
              <section className='bg-blue-200'>
              <Link to={`/recipe/${res.id}`} >
                <h2 className='font-bold text-2xl p-2'>{res.title}</h2>
              </Link>
                <h3 className=''>{res.id}</h3>
              </section>
            </div>
           );
        })
        } 

      </div>
    </>
  )
}

export default FoodCard



        {/* {chicken.map((res)=>{
          return (
            <div key={res.id}>
              <Recipe res={res}/>
            </div>
          )
        })} */}