import React from 'react'
import Logo from "../assets/logo.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className='flex bg-blue-100 shadow'>
        <div className='flex m-0 items-center'>
          <img color='white' width={70} className='m-0' src={Logo} alt="Loading..."/>
        </div>
        <div className='sm:m-auto mx-20 my-auto'>
          <ul className='flex font-bold gap-10'>
            <li  className='hover:underline'><Link to={"/"}>Create Post</Link></li>
            <li className='hover:underline'><Link to={"/allpost"}>All Post</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
