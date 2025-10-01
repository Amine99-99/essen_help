'use client'
import {useContext} from 'react' 
import {ToggleContext} from '../context/toggleContext.jsx'



const useToggle=()=>{
    return useContext(ToggleContext)
}
export default useToggle