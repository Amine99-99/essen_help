'use client'


import React,{useState,useEffect} from 'react'
import Header from './header.jsx'
import MobileHeader  from '../responsive/mobile/mobile_header.jsx'
import MobileMenu from '../responsive/mobile/mobile_menu.jsx'
import useToggle from '../hooks/useToggle.jsx'



const MainHeader=()=>{

    const [innerWidth,setInnerWidth] = useState(0)
    const [innerHeight,setInnerHeight] = useState(0)
    const {menu,toggleMenu} = useToggle()

    useEffect(()=>{
        const handleResize=()=>{
            setInnerWidth(window.innerWidth)
            setInnerHeight(window.innerHeight)
        }
        handleResize()
        window.addEventListener('resize',handleResize)
        return ()=>window.removeEventListener('resize',handleResize)
    },[])


    let HeaderComponent;
    if(innerWidth<=480&& innerHeight<900){
        HeaderComponent= MobileHeader
    }else{
        HeaderComponent=Header
    }
    return(
        <main >
            <HeaderComponent/>

            {
                menu &&(
                   <>
                   <div className='fixed z-0 left-0 top-0' onClick={toggleMenu}></div>
                   <div className='fixed z-10 left-0 top-[30vh]'><MobileMenu/></div>
                   </>
                )

            }
        </main>
    )
}
export default MainHeader