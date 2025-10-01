'use client'

import React ,{useState} from 'react';
import emailjs from "@emailjs/browser";

const Help = () => {


    const [form,setForm] = useState({
        fullName:'',
        email:'',
        gender:'',
        age:'',
        assistance:'',
        payment:'',
        city:'',
        address:'',
        zip:'',
        phone:'',
        health:'',
        notes:''
        })
    
    const [status,setStatus] = useState('')
    const [downloadLink,setDownloadLink] = useState(null)
    const [downloadName,setDownloadName] = useState('')

    const handleChange=(e)=>{
        const {id,value} = e.target 
        setForm((prevForm)=>({
            ...prevForm,[id]:value
        }))
    }

    
    const handleSubmit=(e)=>{
        const now = new Date()
        

        e.preventDefault()
        const supportParams ={
            email : form.email,
            name:form.fullName ,
            time:now ,
            notes: form.notes,
            gender:form.gender,
            age:form.age,
            assistance:form.assistance,
            payment:form.payment,
           city:form.city,
           address:form.address,
           zip:form.zip,
           phone:form.phone,
           health:form.health,


            

        }
        const clientParams={
            email : form.email,
            name:form.fullName ,
            time:now ,
            notes: form.notes,
            gender:form.gender,
            age:form.age,
            assistance:form.assistance,
            payment:form.payment,
           city:form.city,
           address:form.address,
           zip:form.zip,
           phone:form.phone,
           health:form.health,

        }
        emailjs.send(
            "service_zl0sqdp",
            "template_hh5n865",
            supportParams,
            "TVbuHj2tarrU8yiN3"



        ).then(()=>{
            return emailjs.send(
                "service_zl0sqdp",
            "template_qj7ver3",
            clientParams,
            "TVbuHj2tarrU8yiN3"

            )
        }).then(()=>{
            const filename =`Help_Request _${new Date().toISOString()}.json`
             const blob = new Blob([JSON.stringify(form, null, 2)], { type: "application/json" });
             const url = URL.createObjectURL(blob)
            setDownloadLink(url)
             setDownloadName(filename)
       
             setStatus("✅ Message sent successfully, receipt sent")
             setTimeout(()=>setStatus(''),5000)
        setForm({
             fullName:'',
        email:'',
        gender:'',
        age:'',
        assistance:'',
        payment:'',
        city:'',
        address:'',
        zip:'',
        phone:'',
        health:'',
        notes:''
         
        })
      })
      .catch((error) => {
        console.error(error)
        setStatus("❌ Failed to send. Try again.")
        setTimeout(()=>setStatus(''),5000)
      })
        

    }
  return (
    <>
    <form onSubmit={handleSubmit} className=' w-[90vw]  p-5 shadow-sm shadow-black/10 rounded flex flex-col justify-center items-center gap-3 xl: w-[70vw]'>
      
      <h1 className='font-bold text-lg mb-4 text-gray-600'>Request Support</h1>
      
      <div className=' flex flex-col justify-center items-center gap-10 w-[80vw] xl:grid grid-cols-2 w-[60vw] '>

        {/* Full Name */}
        <div className='flex flex-col w-full'>
          <label htmlFor='fullName' className='font-semibold'>Full Name</label>
          <input id='fullName' type='text' placeholder='Your full name' value={form.fullName} onChange={handleChange} className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500' />
        </div>

        {/* Email */}
        <div className='flex flex-col w-full'>
          <label htmlFor='email' className='font-semibold'>Email</label>
          <input id='email' type='email' value={form.email} onChange={handleChange}  placeholder='you@example.com' className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500' />
        </div>

        {/* Gender */}
        <div className='flex flex-col w-full'>
          <label htmlFor='gender' className='font-semibold'>Gender</label>
          <select id='gender' value={form.gender} onChange={handleChange}  className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500'>
            <option className='text-gray-200' value=''>--Select Gender--</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Age */}
        <div className='flex flex-col w-full'>
          <label htmlFor='age' className='font-semibold'>Age</label>
          <select id='age' value={form.age} onChange={handleChange}  className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500'>
            <option className='text-gray-200' value=''>--Select Age Range--</option>
            <option>Under 18</option>
            <option>18–40</option>
            <option>41–60</option>
            <option>Over 60</option>
          </select>
        </div>

        {/* Type of Assistance Needed */}
        <div className='flex flex-col w-full'>
          <label htmlFor='assistance' className='font-semibold'>Type of Assistance Needed</label>
          <select id='assistance' value={form.assistance} onChange={handleChange}  className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500'>
            <option className='text-gray-200' value=''>--Select Reason--</option>
            <option>Emergency Call</option>
            <option>Alzheimer Support</option>
            <option>Home Care</option>
          </select>
        </div>

        {/* Preferred Payment Method */}
        <div className='flex flex-col w-full'>
          <label htmlFor='payment' className='font-semibold'>Preferred Payment Method</label>
          <select id='payment' value={form.payment} onChange={handleChange}  className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500'>
            <option className='text-gray-200' value=''>--Select Payment--</option>
            <option>Insurance</option>
            <option>Paypal</option>
            <option>Cash</option>
          </select>
        </div>

        {/* City / District */}
        <div className='flex flex-col w-full'>
          <label htmlFor='city' className='font-semibold'>City / District</label>
          <input id='city' type='text' value={form.city} onChange={handleChange}  placeholder='Your city or district' className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500' />
        </div>

        {/* Street Address */}
        <div className='flex flex-col w-full'>
          <label htmlFor='address' className='font-semibold'>Street Address</label>
          <input id='address' value={form.address} onChange={handleChange}  type='text' placeholder='Your street address' className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500' />
        </div>

        {/* Zip Code */}
        <div className='flex flex-col w-full'>
          <label htmlFor='zip' className='font-semibold'>Zip Code</label>
          <input id='zip' type='text' value={form.zip} onChange={handleChange}  placeholder='Postal / Zip Code' className='w-full border-2 border-gray-300 rounded  h-[2.5rem] focus:outline-none focus:border-gray-500' />
        </div>

        {/* Phone Number */}
        <div className='flex flex-col w-full'>
          <label htmlFor='phone' className='font-semibold'>Phone Number</label>
          <input id='phone' value={form.phone} onChange={handleChange}  type='tel' placeholder='+49 123 456 789' className='w-full border-2 border-gray-300 rounded h-[2.5rem] focus:outline-none focus:border-gray-500' />
        </div>

        {/* Health Information */}
        <div className='flex flex-col w-full xl:col-span-2'>
          <label htmlFor='health' className='font-semibold'>Health Information (optional)</label>
          <textarea id='health' value={form.health} onChange={handleChange}  rows='3' placeholder='Briefly describe any relevant health issues' className='w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500' />
        </div>

        {/* Additional Notes */}
        <div className='flex flex-col w-full xl:col-span-2'>
          <label htmlFor='notes' className='font-semibold'>Additional Notes</label>
          <textarea id='notes' value={form.notes} onChange={handleChange}  rows='5' placeholder='Describe what you expect us to do for you' className='w-full border-2 border-gray-300 rounded focus:outline-none focus:border-gray-500' />
        </div>

      </div>

      <button className='bg-green-300 cursor-pointer rounded text-black font-bold w-[10rem] h h-[2.5rem] mt-4'>
        Submit Request
      </button>
       {status && <p className='mt-2'>{status}</p>}
    </form>
    {
        downloadLink && (
            <div>
                <p>✅ Request submitted successfully!</p>
                <button className='bg-white border w-[10rem] h-[3rem] ' onClick={()=>{
                    const link = document.createElement('a')
                    link.href= downloadLink 
                    link.download = downloadName
                    link.click()
                    URL.revokeObjectURL(downloadLink)
                    setDownloadName('')
                    setDownloadLink(null)


                }}>
                     📥 Download Receipt
                    

                </button>
            </div>
        )
    }
  </>

  );
}

export default Help;
