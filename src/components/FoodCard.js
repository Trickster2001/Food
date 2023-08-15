import React, { useEffect, useState } from 'react'

import axios from 'axios'
const apiKey = 'b8a0168936974549b29e0d940345f183'


const FoodCard = ({fetchURL}) => {

  const [chicken, setChicken] = useState([])

  useEffect(()=>{
    axios.get(fetchURL).then((res)=>{
      console.log(res.data.results)
      let my = res.data.results
      setChicken(my)
    })
  },[])

  return (
    <>
      <div className='z-[-10] relative grid sm:grid-cols-2 bg-black '>
        {chicken.map((res)=>{
          return (
            <div className='' key={res.id}>
              <section className='bg-red-400'>
                <img className='w-full p-4' src={res.image} alt={res.title} />
              </section>
              <section className='bg-blue-200'>
                <h2 className='font-bold text-2xl p-2'>{res.title}</h2>
                {/* <h3 className=''>{res.title}</h3> */}
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
