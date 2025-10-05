'use client'
import React  from 'react'
import { useTranslation } from "react-i18next";



function ToggleLng(){
  

    const {i18n} = useTranslation()



    const switchLanguage=(e)=>{
        i18n.changeLanguage(e.target.value)
    }



    return(
        <main >
            <select className="border-no rounded p-1 text-sm" value={i18n.language} onChange={switchLanguage}>
               
               
                <option value='de'>🌐DE</option>
                <option value='en'>🌐EN</option>

            </select>
           
        </main>
    )

}
export default ToggleLng