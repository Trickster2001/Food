import React, { useState } from 'react'
import {CiMenuBurger} from 'react-icons/ci'
import {AiOutlineClose} from 'react-icons/ai'
import Button from './Button'

const Navbar = () => {

  const [open, setOpen] = useState(false);


  return (
    <>
      <div className='bg-red-300 w-full fixed top-0 left-0'>
        <div className='md:flex md:px-10 px-7 py-4 items-center justify-between'>
          <div className='cursor-pointer flex items-center font-bold text-3xl pb-4'>
            Simply
          </div>
          <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          {open ? <AiOutlineClose/> : <CiMenuBurger/> }
          </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px]'}`}>
              <li className='md:ml-8 text-xl md:my-0 my-7'>Hello</li>
              <li className='md:ml-8 text-xl md:my-0 my-7'>Hello</li>
              <li className='md:ml-8 text-xl md:my-0 my-7'>Hello</li>
              <li className='md:ml-8 text-xl md:my-0 my-7'>Hello</li>
              <li className='md:ml-8 md:my-0 my-7'>
            <Button className="px-2">
              Hello
            </Button>
              </li>
              <li className='md:ml-8 md:my-0 my-7'>
            <Button className="px-2">
              World
            </Button>
              </li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
