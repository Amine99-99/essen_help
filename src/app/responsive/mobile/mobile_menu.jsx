'use client'

import React from 'react'
import Link from 'next/link'
import useToggle from '../../hooks/useToggle.jsx'



const MobileMenu=()=>{
    const {toggleMenu} = useToggle()

    return(
        
                

                <main className='flex flex-col w-[100vw]  z-10 rounded h-[80vh] bg-white  justify-start pt-3 items-center gap-5 font-bold text-gray-800 text-[20px] menu'>
                   <div className='flex flex-col justify-start items-start gap-2'>
                    <Link onClick={toggleMenu} className='' href='/'>Home</Link>
                    <Link onClick={toggleMenu}  href='/service'>Our Services</Link>
                    <Link onClick={toggleMenu}  href='/our_team'>Our Team</Link>
                    <Link  onClick={toggleMenu} href='/help'>Get Help</Link>
                    <Link onClick={toggleMenu}  href='/faq'>FAQ</Link>
                  
                    <Link onClick={toggleMenu}  href='/feed_back'>Contact Us</Link>
                    </div>
                
        </main>
    )

}
export default MobileMenu