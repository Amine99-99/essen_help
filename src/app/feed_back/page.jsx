'use client'


import React,{useState} from 'react'
import emailjs from "@emailjs/browser";


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
  setStatus("✅ Message sent successfully and receipt sent!");
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
  setStatus("❌ Failed to send. Try again.");
});


    }
    console.log('st',status)


    return(
        <form onSubmit={handleSubmit} className=' w-[90vw] p-5 shadow-xm shadow-black/10 rounded flex flex-col justify-center items-center xl: w-[70vw]  '>
         
                <h1 className='font-bold text-lg  mb-4 text-gray-600 ' >FeedBack Form</h1>
           <div className=' flex flex-col gap-10 justify-center items-center w-[80vw]  xl:grid grid-cols-2 gap-5 w-[60vw]'>
            <div className='col-span-2 w-full flex flex-col justify-center items-start gap-1'>
                <label htmlFor='subject' className='font-semibold '>
                    Subject
                </label>
                <select name='subject' id='subject' value={form.subject} onChange={handleChange} className='border-2 border-gray-300 focus:border-gray-500 focus:outline-none rounded w-full h-[2.5rem] '>
                    <option value=''>--Subject--</option>
                    <option value='website'>Website</option>
                    <option value='service'>Service</option>
                    <option value='payment'>Payment</option>
                    <option value='stuff'>Stuff</option>
                </select>
            </div>
            <div className='w-full flex flex-col justify-center items-start'>
                <label htmlFor='first_name' className='font-semibold '>First Name</label>
                <input name='first_name' id='first_name' value={form.first_name} onChange={handleChange} className='w-full border-2 focus:border-gray-500 focus:outline-none  border-gray-300 rounded h-[2.5rem] ' type='text'/>
                

            </div>
             <div className='w-full flex flex-col justify-center items-start'>
                <label htmlFor='last_name' className='font-semibold '>Last Name</label>
                <input name='last_name' id='last_name' value={form.last_name} onChange={handleChange} className='w-full h-[2.5rem] border-2 focus:border-gray-500 focus:outline-none  border-gray-300 rounded' type='text'/>
                

            </div>
             <div className='w-full flex flex-col justify-center items-start'>
                <label htmlFor='email' className='font-semibold '>Email</label>
                <input name='email' id='email' value={form.email} onChange={handleChange} className='w-full h-[2.5rem] border-2 focus:border-gray-500 focus:outline-none  border-gray-300 rounded' type='text'/>
                

            </div>
             <div className='w-full'>
                <label htmlFor='confirm_email' className='font-semibold '>Confirm Email</label>
                <input name='confirm_email' id='confirm_email' value={form.confirm_email} onChange={handleChange} className='w-full h-[2.5rem] border-2 focus:border-gray-500 focus:outline-none   border-gray-300 rounded' type='text'/>
                

            </div>
            <div className='col-span-2 w-full flex flex-col focus:border-gray-500 focus:outline-none justify-center items-start gap-1'>
                <label htmlFor='phone' className='font-semibold '>
                    Phone
                </label>
                <select name='phone' id='phone' value={form.phone} onChange={handleChange} className=' border-2 focus:border-gray-500 focus:outline-none   border-gray-300 rounded w-full h-[2.5rem] '>
                    <option>--Subject--</option>
                    <option>Website</option>
                    <option>Service</option>
                    <option>Payment</option>
                    <option>Stuff</option>
                </select>
            </div>
        
                  <div className='w-full col-span-2'>
                <label htmlFor='comment' className='font-semibold '>Message/Comment</label>
                <textarea name='comment' id='comment' value={form.comment} onChange={handleChange} rows='5' className='w-full border-2 focus:border-gray-500 focus:outline-none border-gray-300 rounded' type='text'/>
                

        

            </div>
            </div>
           
            <button className='bg-green-300 cursor-pointer rounded text-black font-bold w-[10rem] h-[2.5rem]'>
                Submit 
            </button>

            {status && <p>{status}</p>}
        </form>
    )
}
export default FeedBack