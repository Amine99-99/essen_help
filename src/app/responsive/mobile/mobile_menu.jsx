'use client'

import React ,{useState} from 'react'
import Link from 'next/link'
import useToggle from '../../hooks/useToggle.jsx'
import { useTranslation } from 'react-i18next';



const MobileMenu=()=>{
    const {toggleMenu} = useToggle()
    const {t} = useTranslation('header')
    const [activeLink,setActiveLink] = useState(null)


    const activateLink=(link)=>{
        activeLink===link? setActiveLink(null):setActiveLink(link)
    }


    
    
    const serv=[
        {'id': 1 ,'title':'services'}
    ]
    const services=[
       {'title':'Basic Care','nav':'/services/b_care'},
       {'title':'Treatment Care','nav':'/services/treatment'},
       {'title':'Home Care','nav':'/services/help_home'},
       {'title':'Accompanied Visits','nav':'/services/accompany'},
        {'title':'Palliative & End-of-Life care','nav':'/services/palliative'},
         {'title':'Family Relief & Counseling','nav':'/services/family_relief'}
        ]
        
        
        
        
         return(

    
                       
        
                

                <main className='flex flex-col w-[100vw]  z-10 rounded h-[80vh] bg-white  justify-start pt-3 items-center gap-5 font-bold text-gray-800 text-[20px] menu'>
                   <div className='flex flex-col justify-start items-start gap-2'>
                    <Link onClick={toggleMenu} className='' href='/'>{t('home')}</Link>
                    <ul>{serv.map((link)=><li>
                        <span onClick={()=>activateLink(link.title)}>{link.title}</span>
                        {
                            activeLink && (
                                <ul>
                                    {services.map((subLink,index)=>
                                    <Link onClick={toggleMenu} href={subLink.nav}><li>{subLink.title}</li></Link>)}
                                </ul>
                            )
                        }
                    </li>
                    )}</ul>
                    
                    <Link onClick={toggleMenu}  href='/our_team'>{t('team')}</Link>
                    <Link  onClick={toggleMenu} href='/help'>{t('help')}</Link>
                   
                  
                    <Link onClick={toggleMenu}  href='/feed_back'>{t('contact')}</Link>
                    </div>
                
        </main>
      
    )

}
export default MobileMenu