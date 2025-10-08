'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
{/*{
  "BasicCare": {
    "hero": {
      "title": "Basic Care",
      "description": "Gentle, reliable assistance for your daily needs — provided with respect, patience, and understanding."
    },
    "overview": {
      "title": "Overview",
      "description": "Sometimes, even simple daily activities can feel overwhelming. Our trained caregivers provide personal support to help you stay comfortable, clean, and confident at home — while respecting your dignity and independence."
    },
    "careIncludes": {
      "title": "Our Care Includes",
      "description": [
        "Support with washing, showering, bathing, and dressing",
        "Help with mobility, eating, and hydration",
        "Morning and evening care routines",
        "Assistance in using the bathroom and maintaining hygiene"
      ]
    },
    "benefits": {
      "title": "Benefits",
      "description": [
        "Maintain your independence at home",
        "Feel clean, comfortable, and cared for every day",
        "Receive care covered by long-term care insurance (SGB XI)"
      ]
    },
    "cta": {
      "title": "Get Started",
      "description": "Ready to receive support? Contact us today for a free consultation and learn how our Basic Care can make everyday life easier."
    }
  }
}*/}

const BasicCare = () => {
  const {t} = useTranslation('care')
  return (
    <main className="w-[90%] p-8 shadow-lg shadow-black/10 rounded-xl bg-white flex flex-col gap-12 justify-start items-center">

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 items-center">
        <Image 
          src="/images/bg-2.png" 
          width={550} 
          height={550} 
          className="rounded-lg object-cover shadow-sm"
          alt="Basic Care"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">{t('BasicCare.hero.title')}</h1>
          <p className="text-gray-700 text-lg">
            {t('BasicCare.hero.description')}
            
          </p>
          <Link href='/help'><button className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold w-fit">
            {t('BasicCare.hero.get_in_touch')}
          </button></Link>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('BasicCare.overview.title')}</legend>
          <p className="text-gray-700 mt-2 leading-relaxed">
            {t('BasicCare.hero.description')}
          </p>
        </fieldset>
      </section>

      {/* Our Care Includes */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('BasicCare.careIncludes.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
          <li>{t('BasicCare.careIncludes.description.0')}</li>
          <li>{t('BasicCare.careIncludes.description.1')}</li>
          <li>{t('BasicCare.careIncludes.description.2')}</li>
          <li>{t('BasicCare.careIncludes.description.3')}</li>
   
          </ul>
        </fieldset>
      </section>

      {/* Benefits */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('BasicCare.benefits.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('BasicCare.benefits.description.0')}</li>
              <li>{t('BasicCare.benefits.description.1')}</li>
                <li>{t('BasicCare.benefits.description.2')}</li>
          
          </ul>
        </fieldset>
      </section>

      {/* CTA */}
      <section className="w-full text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t('BasicCare.cta.title')}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {t('BasicCare.cta.description')}
         
        </p>
        <Link href='/help'><button className="bg-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold">
          {t('BasicCare.hero.contact')}
        </button></Link>
      </section>

    </main>
  );
};

export default BasicCare;
