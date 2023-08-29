import { Link } from 'react-router-dom'



const FoodCard = ({chicken}) => {

  return (
    <>
    
    <a href="/recipe/123">Hello</a>
      <div className='relative grid sm:grid-cols-2  '>
        {chicken.map((res)=>{
          return (
            <div key={res.id} className=''>
              <section className=''>
                <Link to={`/recipe/${res.id}`} >
                  <img className='w-full p-4' src={res.image} alt={res.title} />
                </Link>
              </section>
              <section className='bg-black mx-4'>
              <Link to={`/recipe/${res.id}`} >
                <h2 className='font-bold text-white text-center text-2xl  p-4'>{res.title}</h2>
              </Link>
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
