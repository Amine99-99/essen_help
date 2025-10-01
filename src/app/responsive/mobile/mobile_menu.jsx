'use client'

import React from 'react'
import Link from 'next/link'
import useToggle from '../../hooks/useToggle.jsx'



const MobileMenu=()=>{
    const {toggleMenu} = useToggle()

    return(
        
                

                <main className='flex flex-col w-[100vw] bg-white z-10 rounded h-[80vh]  justify-center items-center gap-10 font-bold text-gray-800 text-[20px]'>
                    <Link onClick={toggleMenu} className='' href='/'>Home</Link>
                    <Link onClick={toggleMenu}  href='/service'>Our Services</Link>
                    <Link onClick={toggleMenu}  href='/our_team'>Our Team</Link>
                    <Link  onClick={toggleMenu} href='/help'>Get Help</Link>
                    <Link onClick={toggleMenu}  href='/faq'>FAQ</Link>
                    <Link onClick={toggleMenu}  href='/feed_back'>Feedback</Link>
                    <Link onClick={toggleMenu}  href='/contact'>Contact Us</Link>
                
        </main>
    )

}
export default MobileMenu