'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

// Updated ServiceIcon to include icon and description
const ServiceIcon = ({ icon, label, description }) => (
  <div className="flex flex-col items-center p-4 hover:scale-105 transition border rounded-lg shadow-sm bg-white">
    <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mb-2 text-2xl">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-center mb-2">{label}</h3>
    <p className="text-sm text-center text-gray-600">{description}</p>
  </div>
);

const StepIcon = ({ step, label }) => (
  <div className="flex flex-col items-center p-4">
    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
      <span role="img" aria-label={label} className="text-xl">{step}</span>
    </div>
    <p className="text-center">{label}</p>
  </div>
);

// ... (imports and other components remain the same)

const Landing = () => {
  return (
    <div className="font-sans text-gray-800 flex justify-start flex-col items-center">
      
      {/* Hero Section - UPDATED */}
      <section 
        className="flex w-full h-[70vh] items-center justify-center px-6 py-20 relative overflow-hidden" 
        style={{
          // Use 'absolute' path to the image in the 'public' folder.
          // Adjust the file extension if it's actually .jpg and not a transparent .png
          backgroundImage: "url('/images/bg-2.png')", 
          // Center the image
          backgroundPosition: 'center center',
          // Prevent tiling/repetition
          backgroundRepeat: 'no-repeat',
          // Scale the image to cover the entire section
          backgroundSize: 'cover',
          // Optional: Add a slight overlay color for contrast (e.g., a semi-transparent white/green)
          // You'll handle the content's visibility in the inner div.
        }}
      >
        {/* Optional Overlay for better text readability */}
        <div className="absolute inset-0 bg-white opacity-80 z-0"></div> 

        {/* Content Container - z-index ensures it's above the background/overlay */}
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4 text-green-900">Helping You When You Need It Most</h1>
          <p className="text-xl mb-6 text-gray-700">Providing compassionate care and support at home, whenever you need us.</p>
          <Link href='/help'>
            <button className="bg-green-800 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition text-lg font-semibold">
              Request Help Now
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full px-6 py-24 bg-white">
        <h2 className='text-4xl font-extrabold text-center mb-16 text-green-800'>Our Compassionate Services</h2>
      
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceIcon 
            icon="🧑‍⚕️" 
            label="Basic Care (Grundpflege)" 
            description="Support in daily life for people in need of care, covered by long-term care insurance (SGB XI)." 
          />
          <ServiceIcon 
            icon="🛁" 
            label="Personal Hygiene Assistance" 
            description="Thoughtful assistance with dressing, personal care, and support with food & fluid intake." 
          />
          <ServiceIcon 
            icon="💉" 
            label="Treatment Care (Behandlungspflege)" 
            description="Medication management, sophisticated wound care, injections, and vital health monitoring at home (SGB V)." 
          />
          <ServiceIcon 
            icon="🏠" 
            label="Home Care & Housekeeping" 
            description="Reliable help with shopping, cleaning, laundry, and cooking support to maintain your home environment." 
          />
          <ServiceIcon 
            icon="🧠" 
            label="Dementia & Alzheimer Support" 
            description="Specialized care and supervision for memory-impaired clients, offering crucial relief for family caregivers." 
          />
          <ServiceIcon 
            icon="🤝" 
            label="Palliative & End-of-Life Care" 
            description="Holistic support for patients with non-curable diseases, ensuring dignity and comfort in their final phase of life." 
          />
        </div>
      </section>

      {/* How It Works Section - UPDATED STYLING */}
      <section className="w-full px-6 py-20 bg-white">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-green-800">Your Journey to Care</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          
          <StepIcon step="1" label="Contact us via form or phone call to discuss your needs." />
          
          {/* Separator Arrow */}
          <div className="hidden md:flex items-center">
            <span className="text-3xl text-green-400">→</span>
          </div>

          <StepIcon step="2" label="We create a personalized care plan and assign a trusted helper." />

          {/* Separator Arrow */}
          <div className="hidden md:flex items-center">
            <span className="text-3xl text-green-400">→</span>
          </div>
          
          <StepIcon step="3" label="Care begins quickly and safely in the comfort of your home." />
        </div>
      </section>

      {/* Optional: Call to Action Footer */}
       <section className="w-full bg-green-900 text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to start your care?</h3>
        <p className="text-lg mb-6">Contact us today for a free, no-obligation consultation.</p>
        <Link href='/contact'>
            <button className="bg-white text-green-800 px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition text-lg font-semibold uppercase tracking-wider">
              Get in Touch
            </button>
          </Link>
      </section>
      
   
      
    </div>
  );
};

export default Landing;