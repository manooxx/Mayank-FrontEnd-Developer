import React from 'react'
import{SiSpacex} from "react-icons/si"
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='absolute flex items-center justify-between px-10 w-full '>
        <div>
            <Link to='/'>
                 <SiSpacex className='text-7xl text-white'/>
                 </Link>
        </div>

        <nav>
            <ul className='text-white text-sm  lg:text-base flex gap-8 item-center justify-between p-2  '>
                <li>
                       <Link className='hover:text-blue-500 transition' to='/' >Home</Link> 
                </li>
                <li>
                        <Link  className='hover:text-blue-500 transition' to='/Rockets'>Rockets</Link>
                </li>
                <li>
                        <Link  className='hover:text-blue-500 transition' to='/Capsules'>Capsules</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
