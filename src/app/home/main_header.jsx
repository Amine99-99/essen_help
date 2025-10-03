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
    if(innerWidth<=780 ||(innerWidth===768 && innerHeight===1024)||(innerWidth===1024 && innerHeight===768)||(innerWidth===414 && innerHeight===896)||(innerWidth===896 && innerHeight===414)||(innerWidth===390 && innerHeight===844)||(innerWidth===844 && innerHeight===390)||(innerWidth===430 && innerHeight===932)||(innerWidth===932 && innerHeight===430)||(innerWidth===412 && (innerHeight===915||innerWidth===914))||((innerWidth===915||innerWidth===914) && innerHeight===412)||(innerWidth===344 && innerHeight===882)||(innerWidth===882 && innerHeight===344)){
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
                   <div className='fixed z-0 left-0 top-0  main-o' onClick={toggleMenu}></div>
                   <div className='fixed z-10 left-0 top-[27vh] tog'><MobileMenu/></div>
                   </>
                )

            }
        </main>
    )
}
export default MainHeader