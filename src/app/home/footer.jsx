'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ToggleLng from './toggleLng'




const Footer=()=>{
    return(
       
        <footer className='p-5 bg-gray-100 font-semibold text-[16px] '>
          
          <div className='flex justify-start items-start gap-10 '>
                    <Link className='top-0  p-1 flex justify-center items-center pt-5 flex-col' href='/'>
         <div className='w-[20vw]'>
          <Image
            src="/images/logo-6.png"
            alt="Company Logo"
            width={100}
            height={100}
            className="object-cover rounded"
          />
        </div>
        
                    </Link>
        
                  <div className='w-[60vw] '>
        
                        <div className=' flex flex-col gap-1 text-[16px] justify-start p-5 items-start  xl:grid  grid-cols-3 flex justify-start items-start  text-gray-800 '>
                            <Link className='' href='/'>Home</Link>
                            <Link href='/service'>Our Services</Link>
                            <Link href='/our_team'>Our Team</Link>
                            <Link href='/help'>Get Help</Link>
                            <Link href='/faq'>FAQ</Link>
                        
                            <Link href='/feed_back'>Contact Us</Link>
                        </div>
                    </div>
                     <div><ToggleLng/></div>
                    </div>
                   
                     
                
                 <p className="text-sm text-gray-600">© 2025 Help In Essen. All rights reserved.</p>
                 </footer>
               

    )
}
export default Footer