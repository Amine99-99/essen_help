'use client'

import React from 'react'
import Link from 'next/link'
import useToggle from '../../hooks/useToggle.jsx'
import { useTranslation } from 'react-i18next';



const MobileMenu=()=>{
    const {toggleMenu} = useToggle()
    const {t} = useTranslation('header')

    return(
        
                

                <main className='flex flex-col w-[100vw]  z-10 rounded h-[80vh] bg-white  justify-start pt-3 items-center gap-5 font-bold text-gray-800 text-[20px] menu'>
                   <div className='flex flex-col justify-start items-start gap-2'>
                    <Link onClick={toggleMenu} className='' href='/'>{t('home')}</Link>
                    <Link onClick={toggleMenu}  href='/service'>{t('services')}</Link>
                    <Link onClick={toggleMenu}  href='/our_team'>{t('team')}</Link>
                    <Link  onClick={toggleMenu} href='/help'>{t('help')}</Link>
                    <Link onClick={toggleMenu}  href='/faq'>{t('contact')}</Link>
                  
                    <Link onClick={toggleMenu}  href='/feed_back'>{t('contact')}</Link>
                    </div>
                
        </main>
      
    )

}
export default MobileMenu