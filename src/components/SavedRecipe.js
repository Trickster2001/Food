import React, { useEffect, useState } from 'react'
import { UserAuth } from '../context/AuthContext';
import { db } from '../Firebase';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';


const SavedRecipe = () => {
  const [recipe, setRecipe] = useState([])
  const {user} = UserAuth()

  useEffect(()=>{
    console.log(recipe)
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setRecipe(doc.data()?.savedShow);
     
     });
  }, [user?.email])

  const recipeRef = doc(db, 'users', `${user?.email}`)

  const deleteRecipe = async(passedId) => {
    try {
      const results = recipe.filter((item) => item.id !== passedId)
      await updateDoc(recipeRef, {
        savedShow: results
      })
    } catch(error){
      console.log(error)
    }
  }

  return (
    <>
    <div className='mt-[100px] w-full m-auto'>
      <div className='grid md:grid-cols-4 gap-1 p-4 '>
      {recipe.length === 0 ? (
            <p>Loading...</p> // Display loading message while data is being fetched
          ) : (
            recipe.map((res) => (
              <div key={res.id}>
                <div>
                  <Link to={`/recipe/${res.id}`}>
                    <img src={res.img} alt="" className='rounded-md' />
                  </Link>
                  <div className='flex flex-col items-center h-10'>
                    <Link to={`/recipe/${res.id}`}>
                      <p className='text-xl font-semibold mr-2'>{res.title}</p>
                    </Link>
                    
                      <p onClick={()=> deleteRecipe(res.id)}><AiOutlineClose/></p>
                    
                  </div>
                </div>
              </div>
            ))
          )}
      </div>
    </div>
    </>
  )
}

export default SavedRecipe
