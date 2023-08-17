import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = () => {
  const [steps, setSteps] = useState([])
  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    axios.get(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=b8a0168936974549b29e0d940345f183`)
      .then((res)=>{
        // const data = res.data[0].steps[1].step
        // console.log("Data is",data)
        console.log(res.data[0].steps)
        let my = res.data[0].steps
        setSteps(my)
      })
    
  },[])

  console.log("steps are", steps)

  return (
    <>
      <div className='mt-[84px]'>
        {steps.map((res)=>{
          return (
            <div>
              {res}
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecipeDetail
