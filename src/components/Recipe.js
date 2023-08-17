import React from 'react'
import { Link } from 'react-router-dom'

const Recipe = ({res}) => {
  console.log(res.id)
  return (
    <>
    <div>
      <Link to={'/'} >
        <h2>Hello</h2>
      </Link>
    </div>
      
        <Link to={`/recipe/${res.id}`}>
              <img src={res.image} alt="" />
        </Link>

      <div>
        <Link to={`/recipe/${res.id}`}>
            {res.title}
        </Link>
      </div>
    </>
  )
}

export default Recipe
