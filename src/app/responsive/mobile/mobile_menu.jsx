'use client'

import React ,{useState} from 'react'
import Link from 'next/link'
import useToggle from '../../hooks/useToggle.jsx'
import { useTranslation } from 'react-i18next';

{/*{
  "home": "Home",
  "services": "Services",
  "team": "Our Team",
  "help": "Request Help",
  "contact": "Contact Us",
  
  "service_links": {
    "basic_care": "Basic Care",
    "treatment_care": "Treatment Care",
    "home_care": "Home & Household Help",
    "accompanied_visits": "Accompanied Visits & Errands",
    "palliative": "Palliative & End-of-Life Care",
    "family_relief": "Family Relief & Counseling"
  }
}
*/}

const MobileMenu=()=>{
    const {toggleMenu} = useToggle()
    const {t} = useTranslation('menu')
    const [activeLink,setActiveLink] = useState(null)


    const activateLink=(link)=>{
        activeLink===link? setActiveLink(null):setActiveLink(link)
    }


    
    
    const serv=[
        {'id': 1 ,'title':t('services')}
    ]
    const services=[
       {'title':t('service_links.basic_care'),'nav':'/services/b_care'},
       {'title':t('service_links.treatment_care'),'nav':'/services/treatment'},
       {'title':t('service_links.home_care'),'nav':'/services/help_home'},
       {'title':t('service_links.accompanied_visits'),'nav':'/services/accompany'},
        {'title':t('service_links.palliative'),'nav':'/services/palliative'},
         {'title':t('service_links.family_relief'),'nav':'/services/family_relief'}
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
                                    <Link onClick={toggleMenu} href={subLink.nav}><li className='li'>{subLink.title}</li></Link>)}
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