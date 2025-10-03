'use client'

import React,{useEffect,useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

const sign_1=[
    'Hafsia   Ambulanter   Pflegedienst   Available     24    hours:00000000 Send    Email' , '  we accept insurrance payment     ']
      

const Header=()=>{
    const [sign,setSign] = useState(sign_1.slice(0,1))
    const [idx,setIdx] = useState(0)

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
            <Link className='top-0 p-1 flex justify-center items-center flex-col absolute left-[5vw] ' href='/'>
 <div className='hover:scale-102 transition rounded link-h  '>
  <Image
    src="/images/logo-10.png"
    alt="Company Logo"
    width={160}
    height={160}
    className="object-cover rounded-t  "
  />
  <div className="flex flex-col w-full items-start rounded  leading-none p-1"> <h2 className="text-gray-900 font-bold text-[2rem] m-0 haf ">Hafsia</h2>
   <h2 className="text-gray-900 font-bold m-0 text-[1.11rem] amb">Ambulanter</h2>
   <h2 className="text-gray-900 font-bold m-0 pfl">Pflegedienst</h2> </div>



</div>

            </Link>

            <div className='absolute left-[25vw] top-[20vh] flex  justify-center items-center h-full  p-2 head-side'>
                

                <div className='flex justify-center items-center gap-10 font-bold text-gray-800 text-[20px] titles'>
                    <Link className='' href='/'>Home</Link>
                    <Link href='/service'>Our Services</Link>
                    <Link href='/our_team'>Our Team</Link>
                    <Link href='/help'>Get Help</Link>
                    <Link href='/faq'>FAQ</Link>
                
                    <Link href='/feed_back'>Contact Us</Link>
                </div>
            </div>
            <div className=' absolute left-[83vw] top-[12vh] emer'>
                <button className='bg-red-800 text-white font-bold  h-[3rem] rounded  w-[13rem]  flex gap-2 justify-center items-center btn-emer '>Available 24 Hours <i className="fas fa-envelope"></i></button>
            </div>
        </main>
    )
}
export default Header
