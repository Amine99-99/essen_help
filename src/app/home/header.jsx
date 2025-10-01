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
            <Link className='top-0  p-1 flex justify-center items-center flex-col absolute left-[5vw]' href='/'>
 <div>
  <Image
    src="/images/logo-6.png"
    alt="Company Logo"
    width={160}
    height={160}
    className="object-cover rounded"
  />
</div>

            </Link>

            <div className='absolute left-[25vw] top-[10vh] flex  justify-center items-center h-full  p-2'>
                

                <div className='flex justify-center items-center gap-10 font-bold text-gray-800 text-[20px]'>
                    <Link className='' href='/'>Home</Link>
                    <Link href='/service'>Our Services</Link>
                    <Link href='/our_team'>Our Team</Link>
                    <Link href='/help'>Get Help</Link>
                    <Link href='/faq'>FAQ</Link>
                    <Link href='/feed_back'>Feedback</Link>
                    <Link href='/contact'>Contact Us</Link>
                </div>
            </div>
        </main>
    )
}
export default Header
