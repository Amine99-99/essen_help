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
    const [open,setOpen] = useState(false)
      const { t, i18n } = useTranslation('header');

    {/*useEffect(()=>{
        const intervalId=setInterval(()=>{
            const nextIdx = (idx +1)%sign_1.length 
            setSign(sign_1.slice(idx,nextIdx===0?sign_1.length:nextIdx))
            setIdx(nextIdx)
        },5000)
        return () => clearInterval(intervalId);
    },[idx])
      "service_links": {
    "basic_care": "Grundpflege",
    "treatment_care": "Behandlungspflege",
    "home_care": "Haushaltshilfe & Betreuung zu Hause",
    "accompanied_visits": "Begleitete Termine & Erledigungen",
    "palliative": "Palliativ- & End-of-Life-Pflege",
    "family_relief": "Familienentlastung & Beratung"
  */}

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
                      <div className='relative' onMouseEnter={()=>setOpen(true)} onMouseLeave={()=>setOpen(false)}>
                         <span className='p-1 rounded hover:bg-green-100' >{t('services')}</span>
                                                     {
                                open && (
                                    <ul className='bg-white text-[16px] rounded p-1 z-50 w-[19rem] absolute top-[100%] left-0 '>
                                      <Link className='border-b flex justify-start items-center'  href='/services/b_care'><li className='h-[2rem] '>{t('service_links.basic_care')}</li></Link>
                                       <Link className='border-b flex justify-start items-center'   href='/services/treatment'><li className='h-[2rem] '>{t('service_links.treatment_care')}</li></Link>
                                        <Link className='border-b flex justify-start items-center'   href='/services/help_home'><li className='h-[2rem] '>{t('service_links.home_care')}</li></Link>
                                           <Link className='border-b flex justify-start items-center'   href='/services/accompany'><li className='h-[2rem] '>{t('service_links.accompanied_visits')}</li></Link>
                                              <Link className='border-b flex justify-start items-center'  href='/services/palliative'><li className='h-[2rem] '>{t('service_links.palliative')}</li></Link>
                                                 <Link  className='border-b flex justify-start items-center'  href='/services/family_relief'><li className='h-[2rem] '>{t('service_links.family_relief')}</li></Link>
                                      
                                    </ul>

                                )
                            }
                         

                      </div>
                   
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