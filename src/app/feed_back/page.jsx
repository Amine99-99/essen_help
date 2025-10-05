'use client'


import React,{useState} from 'react'
import emailjs from "@emailjs/browser";
import { useTranslation } from 'react-i18next';
  {/*"feedback": {
    "title": "Feedback Form",
    "subject": "Subject",
    "subjectPlaceholder": "--Subject--",
    "website": "Website",
    "service": "Service",
    "payment": "Payment",
    "stuff": "Stuff",
    "firstName": "First Name",
    "lastName": "Last Name",
    "email": "Email",
    "confirmEmail": "Confirm Email",
    "phone": "Phone",
    "message": "Message/Comment",
    "submit": "Submit",
    "success": "✅ Message sent successfully and receipt sent!",
    "error": "❌ Failed to send. Try again."
  }*/}

const FeedBack=()=>{
    const [form,setForm]= useState({
        subject:'',
        first_name:'',
        last_name:'',
        email:'',
        confirm_email:'',
        phone:'',
        comment:''

    })
    const {t} = useTranslation('contact')
    const [status,setStatus] = useState('')

    const handleChange=(e)=>{
        const {name,value} = e.target 
        setForm((prevForm)=>({
            ...prevForm,[name]:value
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const templateParams={
            from_email:form.email,
            name:form.first_name,
            message:form.comment,
            time:new Date().toLocaleString()
        }

        const clientParams={
            from_email:form.email,
            name:form.first_name,
            message:form.comment,
            subject:form.subject,
            time: new Date().toLocaleString()
        }

       emailjs.send(
  "service_dt64i7l",
  "template_98j0xl4", // admin template
  templateParams,
  "VcWNGAe4uh96BGrBR"
).then(() => {
  // Admin success
  return emailjs.send(
    "service_dt64i7l",
    "template_rzzcpk5", // client receipt template
    clientParams,
    "VcWNGAe4uh96BGrBR"
  );
}).then(() => {
  setStatus(t('feedback.success'));
  setForm({
    subject: "",
    first_name: "",
    last_name: "",
    email: "",
    confirm_email: "",
    phone: "",
    comment: ""
  });
}).catch((error) => {
  console.error(error);
  setStatus(t('feedback.error'));
});


    }
    console.log('st',status)


    return(
        <form onSubmit={handleSubmit} className=' text-[16px] w-[90vw] p-5 shadow-xm shadow-black/10 rounded flex flex-col justify-center items-center xl: w-[70vw]  '>
                         <h1 className='font-semibold   mb-4 text-gray-600 ' >{t('feedback.title')}</h1>
           <div className=' flex flex-col gap-10 justify-center items-center w-[80vw]  xl:grid grid-cols-2 gap-5 w-[60vw]'>
            <div className='col-span-2 w-full flex flex-col justify-center items-start gap-1'>
                <label htmlFor='subject' className='font-semibold '>
                    {t('feedback.subject')}
                </label>
                <select name='subject' id='subject' value={form.subject} onChange={handleChange} className=' bg-gray-100 border-no  rounded w-full h-[2.5rem] '>
                    <option value=''>{t('feedback.subjectPlaceholder')}</option>
                    <option value='website'>{t('feedback.website')}</option>
                    <option value='service'>{t('feedback.service')}</option>
                    <option value='payment'>{t('feedback.payment')}</option>
                    <option value='stuff'>{t('feedback.stuff')}</option>
                </select>
            </div>
            <div className='w-full flex flex-col justify-center items-start'>
                <label htmlFor='first_name' className='font-semibold '>{t('feedback.firstName')}</label>
                <input name='first_name' id='first_name' value={form.first_name} onChange={handleChange} className='w-full bg-gray-100 border-no  rounded h-[2.5rem] ' type='text'/>
                

            </div>
             <div className='w-full flex flex-col justify-center items-start'>
                <label htmlFor='last_name' className='font-semibold '>{t('feedback.lastName')}</label>
                <input name='last_name' id='last_name' value={form.last_name} onChange={handleChange} className='w-full h-[2.5rem] bg-gray-100 border-no  rounded' type='text'/>
                

            </div>
             <div className='w-full flex flex-col justify-center items-start'>
                <label htmlFor='email' className='font-semibold '>{t('feedback.email')}</label>
                <input name='email' id='email' value={form.email} onChange={handleChange} className='w-full h-[2.5rem] bg-gray-100 border-no  rounded' type='text'/>
                

            </div>
             <div className='w-full'>
                <label htmlFor='confirm_email' className='font-semibold '>{t('feedback.confirmEmail')}</label>
                <input name='confirm_email' id='confirm_email' value={form.confirm_email} onChange={handleChange} className='w-full h-[2.5rem] bg-gray-100 border-no  rounded' type='text'/>
                

            </div>
            <div className='col-span-2 w-full flex flex-col focus:border-gray-500 focus:outline-none justify-center items-start gap-1'>
                <label htmlFor='phone' className='font-semibold '>
                    {t('feedback.phone')}
                </label>
                <select name='phone' id='phone' value={form.phone} onChange={handleChange} className=' bg-gray-100 border-no  rounded w-full h-[2.5rem] '>
                    <option>--Subject--</option>
                    <option>Website</option>
                    <option>Service</option>
                    <option>Payment</option>
                    <option>Stuff</option>
                </select>
            </div>
        
                  <div className='w-full col-span-2'>
                <label htmlFor='comment' className='font-semibold '>{t('feedback.message')}</label>
                <textarea name='comment' id='comment' value={form.comment} onChange={handleChange} rows='5' className='w-full bg-gray-100 border-no  rounded' type='text'/>
                

        

            </div>
            </div>
           
            <button className='bg-green-300 cursor-pointer rounded text-black font-bold w-[10rem] h-[2.5rem]'>
                {t('feedback.submit')}
            </button>

            {status && <p>{status}</p>}
        </form>
    )
}
export default FeedBack