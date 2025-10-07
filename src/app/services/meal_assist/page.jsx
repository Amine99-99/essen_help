'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

const MealAssistance = () => {
  return (
    <main className="w-[90%] p-8 shadow-lg shadow-black/10 rounded-xl bg-white flex flex-col gap-12 justify-start items-center">

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 items-center">
        <Image 
          src="/images/bg-2.png" 
          width={550} 
          height={550} 
          className="rounded-lg object-cover shadow-sm"
          alt="Meal Assistance"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">Meal Assistance</h1>
          <p className="text-gray-700 text-lg">
            Nutritious, tailored meals delivered with care — supporting health, comfort, and independence.
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
            Proper nutrition is vital for health and well-being. Our caregivers provide support with meal planning, preparation, and feeding when needed, helping you maintain a balanced diet and enjoy your meals safely.
          </p>
        </fieldset>
      </section>

      {/* Our Care Includes */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">Our Care Includes</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>Planning nutritious meals based on dietary needs</li>
            <li>Preparing and serving meals safely</li>
            <li>Assistance with eating when necessary</li>
            <li>Monitoring hydration and dietary compliance</li>
          </ul>
        </fieldset>
      </section>

      {/* Benefits */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">Benefits</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>Maintain a healthy, balanced diet at home</li>
            <li>Enjoy meals safely and comfortably</li>
            <li>Reduce stress on family members or caregivers</li>
          </ul>
        </fieldset>
      </section>

      {/* CTA */}
      <section className="w-full text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Get Started</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Need support with meals? Contact us today for a free consultation and learn how our Meal Assistance can improve daily nutrition and comfort.
        </p>
        <Link href='/help'><button className="bg-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold">
          Contact Us
        </button></Link>
      </section>

    </main>
  );
};

export default MealAssistance;
