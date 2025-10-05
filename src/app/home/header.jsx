'use client'

import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next';
import ToggleLng from './toggleLng.jsx'

const sign_1=[
    'Hafsia   Ambulanter   Pflegedienst   Available     24    hours:00000000 Send    Email' , '  we accept insurrance payment     ']
      

const Header=()=>{
    const [sign,setSign] = useState(sign_1.slice(0,1))
    const [idx,setIdx] = useState(0)
      const { t, i18n } = useTranslation('header');

    {/*useEffect(()=>{
        const intervalId=setInterval(()=>{
            const nextIdx = (idx +1)%sign_1.length 
            setSign(sign_1.slice(idx,nextIdx===0?sign_1.length:nextIdx))
            setIdx(nextIdx)
        },5000)
        return () => clearInterval(intervalId);
    },[idx])*/}

    return(
        <main className='w-full p-1 relative top-0 z-50 flex justify-center items-center'>
            <Link className='top-0 p-1 flex justify-center items-center flex-col absolute left-[5vw] top-[2vh] ' href='/'>
 <div className='hover:scale-102 transition rounded link-h  '>
  <Image
    src="/images/log-11.png"
    alt="Company Logo"
    width={100}
    height={100}
    className="object-cover rounded-t  "
  />
  <div className="flex flex-col w-full items-start rounded  leading-none p-1"> <h2 className=" text-[rgba(15,79,15,1)] text-[2rem] m-0 haf ">Hafsia</h2>
   <h2 className="text-gray-600  m-0 text-[1.11rem] amb">Ambulanter</h2>
   <h2 className="text-gray-600  m-0 pfl">Pflegedienst</h2> </div>



</div>

            </Link>

            <div className='absolute left-[25vw] top-[20vh] flex  justify-center items-center h-full  p-2 head-side'>
                

                <div className='flex justify-center items-center gap-10  text-[rgba(15,79,15,1)] font-semibold text-[18px] leading-relaxed titles'>
                      <Link className='p-1 rounded hover:bg-green-100' href="/">{t('home')}</Link>
                    <Link className='p-1 rounded hover:bg-green-100' href='/service'>{t('services')}</Link>
                    <Link className='p-1 rounded hover:bg-green-100'  href='/our_team'>{t('team')}</Link>
                    <Link className='p-1 rounded hover:bg-green-100'  href='/help'>{t('help')}</Link>
                    <Link className='p-1 rounded hover:bg-green-100'  href='/faq'>{t('FAQ')}</Link>
                
                    <Link className='p-1 rounded hover:bg-green-100'  href='/feed_back'>{t('contact')}</Link>
                </div>
            </div>
            <div className=' absolute left-[83vw] top-[12vh] emer'>
                <button className='bg-red-800 text-white leading-tight  h-[3rem] rounded-full  w-[14rem]  flex gap-2 justify-center items-center btn-emer '>{t('available')} <i className="fas fa-envelope"></i></button>
            </div>
           
        </main>
    )
}
export default Header
