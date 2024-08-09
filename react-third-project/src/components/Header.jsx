import React from 'react'
import {  Link, NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className='flex justify-between bg-red-400 items-center px-4 py-3'>
      <div className="">
     <h1 className='text-3xl'>Your Logo</h1>
      </div>

      <div className='flex gap-12 '>
      <ul className='flex gap-12'>
      <NavLink to="/">
      <li>Home</li>
      </NavLink>
      
      <NavLink to='About'>
            <li>About</li>
        </NavLink>

        <NavLink to="contact">
        <li >Contact</li>
        </NavLink>
       
      </ul>

     <Link>
     <button>Login</button>
     </Link>
     <Link>
     <button>SignUp</button>
     </Link>
      </div>
      
    </div>
  )
}

export default Header
