import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const LogIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const {user, logIn} = UserAuth()
  const navigate = useNavigate()

  const handleSubmit= async(e) => {
    e.preventDefault()
    setError('')
    try{
      await logIn(email, password)
      navigate('/')
    } catch(error){
      // console.log(err)
      setError(error.message)
      // console.log(error)
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/ce221d7a-8901-41d9-b726-3ea2efe3a650/2f69dcef-463f-44da-b3b9-662b65f33f82/IN-en-20230703-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="/" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 x-50'>
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sign In</h1>
              {error ? <p className='text-white text-2xl'>{error}</p> : null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email' className='py-3 px-2 my-2 bg-gray-700 rounded ' />
                <input onChange={(e)=>{setPassword(e.target.value)}} className='py-3 px-2 my-2 bg-gray-700 rounded ' type="password" placeholder='Password' />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input id='test' className='mr-2' type="checkbox" /><label htmlFor="test">Remember Me</label></p>
                  <p>Need Hekp?</p>
                </div>
                <p className='py-8'><span className='text-gray-600 mr-2'>New to Netflix?</span><Link to='/signup'>Sign Up</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn
