'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ToggleLng from './toggleLng'
import { useTranslation } from 'react-i18next';




const Footer=()=>{
  const {t} = useTranslation('header')
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
                            <Link className='' href='/'>{t('home')}</Link>
                         
                            <Link href='/our_team'>{t('team')}</Link>
                            <Link href='/help'>{t('help')}</Link>
                        
                        
                            <Link href='/feed_back'>{t('contact')}</Link>
                        </div>
                    </div>
                     <div><ToggleLng/></div>
                    </div>
                   
                     
                
                 <p className="text-sm text-gray-600">{t('right')}</p>
                 </footer>
               

    )
}
export default Footer