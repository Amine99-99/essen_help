'use client'

import {useState,createContext} from 'react'



export const ToggleContext = createContext()




export const ToggleProvider=({children})=>{
    const [menu,setMenu] = useState(false)



    const toggleMenu=()=>{
        setMenu((prev)=>!prev)
    }


    return(
        <ToggleContext.Provider value={{menu,toggleMenu}}>
            {children}
        </ToggleContext.Provider>
    )
}