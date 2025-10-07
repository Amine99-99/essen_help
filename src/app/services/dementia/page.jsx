'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const DementiaSupport = () => {
  return (
    <main className="w-[90%] p-8 shadow-lg shadow-black/10 rounded-xl bg-white flex flex-col gap-12 justify-start items-center">

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 items-center">
        <Image 
          src="/images/dementia-support.png" 
          width={400} 
          height={400} 
          className="rounded-lg object-cover shadow-sm"
          alt="Dementia & Alzheimer Support"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">Dementia & Alzheimer Support</h1>
          <p className="text-gray-700 text-lg">
            Gentle supervision and meaningful engagement for clients with memory challenges — giving families peace of mind.
          </p>
          <Link href='/help'><button className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold w-fit">
            Get In Touch
          </button></Link>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">Overview</legend>
          <p className="text-gray-700 mt-2 leading-relaxed">
            Our trained caregivers provide specialized support for clients with dementia or Alzheimer’s. Through structured activities, memory exercises, and compassionate supervision, we enhance safety, engagement, and quality of life.
          </p>
        </fieldset>
      </section>

      {/* Our Care Includes */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">Our Care Includes</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>Supervision and safety monitoring</li>
            <li>Memory exercises and cognitive support</li>
            <li>Meaningful activities and companionship</li>
            <li>Support for family caregivers</li>
          </ul>
        </fieldset>
      </section>

      {/* Benefits */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">Benefits</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>Peace of mind for families</li>
            <li>Improved quality of life for clients</li>
            <li>Safe and supportive environment</li>
          </ul>
        </fieldset>
      </section>

      {/* CTA */}
      <section className="w-full text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Get Started</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Support your loved one with dementia or Alzheimer’s. Contact us today to learn how we can help.
        </p>
        <Link href='/help'><button className="bg-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold">
          Contact Us
        </button></Link>
      </section>

    </main>
  );
};

export default DementiaSupport;
