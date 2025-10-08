'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import useToggle from '../../hooks/useToggle.jsx'

import { useTranslation } from 'react-i18next';



const MobileHeader=()=>{
    const {toggleMenu} = useToggle()
    const {t} = useTranslation('header')
    return(
               <main className='w-full p-1 relative top-0 z-50 flex justify-center items-center'>
         <Link className='   flex  justify-center items-center flex-col absolute left-[5vw] top-[1.74vh] log-top  ' href='/'>
 <div className='hover:scale-102 transition rounded link-h '>
  <Image
    src="/images/log-11.png"
    alt="Company Logo"
    width={100}
    height={100}
    className="object-cover rounded-t img1  "
  />
  <div className="flex flex-col w-full items-start rounded  leading-none p-1"> <h2 className="text-gray-900 font-bold text-[2rem] m-0 ">Hafsia</h2>
   <h2 className="text-gray-900 font-bold m-0 text-[1.11rem]">Ambulanter</h2>
   <h2 className="text-gray-900 font-bold m-0">Pflegedienst</h2> </div>



</div>

            </Link>
      
        <div className='absolute left-[85vw] top-[10vh] m-btn'>
            <button onClick={toggleMenu}  className='w-[50px] rounded h-[50px] bg-gray-100 flex flex-col justify-center items-center gap-1 me-btn'>
                <div className='w-[48px] h-[8px] bg-gray-300 shadow-inner'></div>
                  <div className='w-[48px] h-[8px] bg-gray-300 shadow-inner'></div>
                    <div className='w-[48px] h-[8px] bg-gray-300 shadow-inner'></div>
            </button>
        </div>
         <div className='absolute left-[50vw] top-[5vh] emer'>
                <button className='bg-red-800 text-white font-bold  h-[3rem] rounded w-[13rem]  flex gap-2 justify-center items-center btn-emer  '>{t('available')} <i className="fas fa-envelope"></i></button>
            </div>
            
        </main>
        
    )
}
export default MobileHeader