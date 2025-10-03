'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

// Updated ServiceIcon to include icon and description
const ServiceIcon = ({ icon, label, description }) => (
  <div className="flex flex-col items-center p-4 hover:scale-105 transition border rounded-lg shadow-sm bg-white">
    <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-2 text-2xl">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-center mb-2">{label}</h3>
    <p className="text-sm text-center text-gray-600">{description}</p>
  </div>
);

const StepIcon = ({ step, label }) => (
  <div className="flex flex-col items-center p-4">
    <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center mb-2">
      <span role="img" aria-label={label} className="text-xl">{step}</span>
    </div>
    <p className="text-center">{label}</p>
  </div>
);

const Landing = () => {
  return (
    <div     className="font-sans text-gray-800 flex justify-start flex-col items-center  ">
      

  
      
      {/* Hero Section */}
     <section 
    
  className="flex  h-[70vh] items-center justify-center px-6 py-20 "
>
        <div className="">
          <h1 className="text-4xl font-bold mb-4">Helping You When You Need It Most</h1>
          <p className="text-lg mb-6">Providing compassionate care and support at home, whenever you need us.</p>
          <Link href='/help'><button className="bg-green-600 text-white px-6 py-3 rounded shadow hover:bg-green-600 transition">Request Help Now</button></Link>
        </div>
      
      </section>
      <Image src='/images/bg-2.png' className='rounded border img-land' width={800} height={600} alt="landing-image"/>

      {/* Services Section */}
      <section     className="px-6 py-20 bg-white">
        <h1 className='text-gray-900 text-center my-5 text-3xl  font-bold'>Our Services</h1>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceIcon 
            icon="🧑‍⚕️" 
            label="Basic Care" 
            description="Support in daily life for people in need of care, covered by long-term care insurance." 
          />
          <ServiceIcon 
            icon="🛁" 
            label="Help with Personal Care" 
            description="Assistance with dressing, food & fluid intake, and treatment care." 
          />
          <ServiceIcon 
            icon="💉" 
            label="Treatment Care" 
            description="Medication management, wound care, injections, and health monitoring at home." 
          />
          <ServiceIcon 
            icon="🏠" 
            label="Home Care" 
            description="Shopping, cleaning, laundry, and cooking support for your home." 
          />
          <ServiceIcon 
            icon="🧠" 
            label="Care for Dementia & Alzheimer" 
            description="Specialized support for memory care, helping families and loved ones." 
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <StepIcon step="1" label="Request help via form or call" />
          <StepIcon step="2" label="We assign a trusted helper" />
          <StepIcon step="3" label="Task completed safely & quickly" />
        </div>
      </section>

    </div>
  );
};

export default Landing;
