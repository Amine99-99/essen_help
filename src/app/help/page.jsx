
'use client'

import React ,{useState} from 'react';
import emailjs from "@emailjs/browser";
import Image from 'next/image'
import { useTranslation } from 'react-i18next';

const Help = () => {
  const {t} = useTranslation('help')

{/*
  {
  "help": {
    "title": "Request Support",
    "fullName": "Full Name",
    "email": "Email",
    "gender": "Gender",
    "selectGender": "--Select Gender--",
    "male": "Male",
    "female": "Female",
    "other": "Other",
    "age": "Age",
    "selectAge": "--Select Age Range--",
    "ageUnder18": "Under 18",
    "age18to40": "18–40",
    "age41to60": "41–60",
    "ageOver60": "Over 60",
    "assistance": "Type of Assistance Needed",
    "selectAssistance": "--Select Reason--",
    "emergency": "Emergency Call",
    "alzheimer": "Alzheimer Support",
    "homeCare": "Home Care",
    "payment": "Preferred Payment Method",
    "selectPayment": "--Select Payment--",
    "insurance": "Insurance",
    "paypal": "Paypal",
    "cash": "Cash",
    "city": "City / District",
    "address": "Street Address",
    "zip": "Zip Code",
    "phone": "Phone Number",
    "health": "Health Information (optional)",
    "notes": "Additional Notes",
    "submit": "Submit Request",
    "success": "✅ Message sent successfully, receipt sent",
    "error": "❌ Failed to send. Try again",
    "downloadReceipt": "📥 Download Receipt"
  }
}

  
  
  
  
  */}




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
       
             setStatus(t('help.success'))
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
        setStatus(t('help.error'))
        setTimeout(()=>setStatus(''),5000)
      })
        

    }
  return (
    <main className='flex flex-col justify-start items-center gap-2'>
    <form onSubmit={handleSubmit} className=' text-[16px] w-[90vw]  p-5 shadow-sm shadow-black/10 rounded flex flex-col justify-center items-center gap-3 xl: w-[70vw]'>
      
      <h1 className=' font-semibold mb-4 text-gray-600'>{t('help.title')}</h1>
      
      <div className=' flex flex-col justify-center items-center gap-10 w-[80vw] xl:grid grid-cols-2 w-[60vw] '>

        {/* Full Name */}
        <div className='flex flex-col w-full'>
          <label htmlFor='fullName' className='font-semibold'>{t('help.fullName')}</label>
          <input id='fullName' type='text'  value={form.fullName} onChange={handleChange} className='w-full bg-gray-100 border-no rounded  h-[2.5rem] ' />
        </div>

        {/* Email */}
        <div className='flex flex-col w-full'>
          <label htmlFor='email' className='font-semibold'>{t('help.email')}</label>
          <input id='email' type='email' value={form.email} onChange={handleChange}   className='w-full bg-gray-100 border-no   rounded  h-[2.5rem] ' />
        </div>

        {/* Gender */}
        <div className='flex flex-col w-full'>
          <label htmlFor='gender' className='font-semibold'>{t('help.gender')}</label>
          <select id='gender' value={form.gender} onChange={handleChange}  className='w-full bg-gray-100 border-no  rounded  h-[2.5rem] '>
            <option className='text-gray-200' value=''>{t('help.selectGender')}</option>
            <option>{t('help.male')}</option>
            <option>{t('help.female')}</option>
            <option>{t('help.other')}</option>
          </select>
        </div>

        {/* Age */}
        <div className='flex flex-col w-full'>
          <label htmlFor='age' className='font-semibold'>{t('help.age')}</label>
          <select id='age' value={form.age} onChange={handleChange}  className='w-full  rounded  h-[2.5rem] bg-gray-100 border-no '>
            <option className='text-gray-200' value=''>{t('help.selectAge')}</option>
            <option>{t('help.ageUnder18')}</option>
            <option>{t('help.age18to40')}</option>
            <option>{t('help.age41to60')}</option>
            <option>{t('help.ageOver60')}</option>
          </select>
        </div>

        {/* Type of Assistance Needed */}
        <div className='flex flex-col w-full'>
          <label htmlFor='assistance' className='font-semibold'>{t('help.assistance')}</label>
          <select id='assistance' value={form.assistance} onChange={handleChange}  className='w-full bg-gray-100 border-no  rounded  h-[2.5rem] '>
            <option className='text-gray-200' value=''>{t('help.selectAssistance')}</option>
            <option>{t('help.emergency')}</option>
            <option>{t('help.alzheimer')}</option>
            <option>{t('help.homeCare')}</option>
          </select>
        </div>

        {/* Preferred Payment Method */}
        <div className='flex flex-col w-full'>
          <label htmlFor='payment' className='font-semibold'>{t('help.payment')}</label>
          <select id='payment' value={form.payment} onChange={handleChange}  className='w-full bg-gray-100 border-no  rounded  h-[2.5rem] '>
            <option className='text-gray-200' value=''>{t('help.selectPayment')}</option>
            <option>{t('help.insurrance')}</option>
            <option>{t('help.paypal')}</option>
            <option>{t('help.cash')}</option>
          </select>
        </div>

        {/* City / District */}
        <div className='flex flex-col w-full'>
          <label htmlFor='city' className='font-semibold'>{t('help.city')}</label>
          <input id='city' type='text' value={form.city} onChange={handleChange}   className='w-full  h-[2.5rem] bg-gray-100 border-no ' />
        </div>

        {/* Street Address */}
        <div className='flex flex-col w-full'>
          <label htmlFor='address' className='font-semibold'>{t('help.address')}</label>
          <input id='address' value={form.address} onChange={handleChange}  type='text'  className='w-full  rounded  h-[2.5rem] bg-gray-100 border-no ' />
        </div>

        {/* Zip Code */}
        <div className='flex flex-col w-full'>
          <label htmlFor='zip' className='font-semibold'>{t('help.zip')}</label>
          <input id='zip' type='text' value={form.zip} onChange={handleChange}  className='w-full  rounded  h-[2.5rem] bg-gray-100 border-no ' />
        </div>

        {/* Phone Number */}
        <div className='flex flex-col w-full'>
          <label htmlFor='phone' className='font-semibold'>{t('help.phone')}</label>
          <input id='phone' value={form.phone} onChange={handleChange}  type='tel'  className='w-full bg-gray-100 border-no  rounded h-[2.5rem] ' />
        </div>

        {/* Health Information */}
        <div className='flex flex-col w-full xl:col-span-2'>
          <label htmlFor='health' className='font-semibold'>{t('help.health')}</label>
          <textarea id='health' value={form.health} onChange={handleChange}  rows='3' placeholder='Briefly describe any relevant health issues' className='w-full bg-gray-100 border-no  rounded ' />
        </div>

        {/* Additional Notes */}
        <div className='flex flex-col w-full xl:col-span-2'>
          <label htmlFor='notes' className='font-semibold'>{t('help.notes')}</label>
          <textarea id='notes' value={form.notes} onChange={handleChange}  rows='5' placeholder='Describe what you expect us to do for you' className='w-full rounded bg-gray-100 border-no ' />
        </div>

      </div>

      <button className='bg-green-300 cursor-pointer rounded text-black font-bold w-[10rem] h h-[2.5rem] mt-4'>
        {t('help.submit')}
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
      <Image src='/images/bg-3.png'  width={800}
    height={800}
    alt='footer'
    className="object-cover rounded border-no "/>
  </main>

  );
}

export default Help;