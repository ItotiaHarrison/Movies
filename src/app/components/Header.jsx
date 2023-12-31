import React from 'react'
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';
import Signin from './Signin';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6'>

      <div className="flex items-center space-x-5">

        <Link href="/">
          <h2 className='text-2xl'>
            <span className='font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1'>Movie</span>
            <span className='text-xl hidden sm:inline'>Flix</span></h2>
        </Link>
      </div>


      <div className="flex">
        <DarkModeSwitch className="mx-2"/>
        <Signin className="mx-2"/>
        <div className="mx-2">
          <GiHamburgerMenu/>
        </div>
      </div>


    </div>
  )
}
