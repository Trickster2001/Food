import axios from 'axios'
import React, { useEffect, useState } from 'react'

const apiKey = 'b8a0168936974549b29e0d940345f183'

const Test = () => {

  const [popular, setPopular] = useState([])

  useEffect(()=>{
    axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=10`)
      .then((res)=>{
          const data = (res.data.recipes)
          console.log(data)
          setPopular(data)
      })
      .catch((err)=>{
        console.log(err)
      })
  },[])

  return (
    <>
      <div className='h-full flex'>
        <div className="h-[100vh] w-1/2 bg-blue-300 sticky top-0">Left</div>
        <div className="w-1/2 overflow-y-scroll">
          <div className='bg-red-400 h-[100vh]'>first</div>
          <div className='bg-white h-52'>first</div>
          <div className='bg-green-400 h-52'>first</div>
        </div>
      </div>
      <div>
        <div>
          {popular.map((res)=>{
            return(
              <div key={res.id}>
                {res.title}
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Test
