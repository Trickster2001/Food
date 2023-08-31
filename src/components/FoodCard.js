import { Link } from 'react-router-dom'
import heart from "../newheart.png"
import { AiOutlineHeart } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react';




const FoodCard = ({ chicken }) => {

// const [like, setLike] = useState(false)
  return (
    <>

      {/* <a href="/recipe/123">Hello</a> */}
      <div className='relative grid sm:grid-cols-2  '>
        {chicken.map((res) => {
          return (
            <div key={res.id} className=''>
              <section className=''>
                <Link to={`/recipe/${res.id}`} >
                  <img className='w-full p-4' src={res.image} alt={res.title} />
                </Link>
              </section>
              <section className='bg-black mx-4'>
                <div className='flex h-fit items-center'>
                  <Link to={`/recipe/${res.id}`} >
                    <div>
                      <p className='font-bold text-white text-center text-2xl px-2 py-4'>{res.title}</p>
                    </div>
                  </Link>
                  {/* <div>
                    <p className='text-gray-50 text-xl'>
                      {like ? <FaHeart/> : <FaRegHeart/>}
                    </p>
                  </div> */}
                </div>
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
