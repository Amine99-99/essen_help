'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useToggle from '../../hooks/useToggle.jsx'



const MobileHeader=()=>{
    const {toggleMenu} = useToggle()
    return(
               <main className='w-full p-1 relative top-0 z-50 flex justify-center items-center'>
                    <Link className='top-0  p-1 flex justify-center items-center flex-col absolute left-[5vw]' href='/'>
         <div>
          <Image
            src="/images/logo-6.png"
            alt="Company Logo"
            width={150}
            height={150}
            className="object-cover rounded"
          />
        </div>
        </Link>
        <div className='absolute left-[80vw] top-[10vh]'>
            <button onClick={toggleMenu}  className='w-[60px] h-[60px] bg-gray-100 flex flex-col justify-center items-center gap-1'>
                <div className='w-[50px] h-[8px] bg-gray-300 shadow-inner'></div>
                  <div className='w-[50px] h-[8px] bg-gray-300 shadow-inner'></div>
                    <div className='w-[50px] h-[8px] bg-gray-300 shadow-inner'></div>
            </button>
        </div>
        </main>
        
    )
}
export default MobileHeader