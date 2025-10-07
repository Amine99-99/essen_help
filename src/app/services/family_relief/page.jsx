'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

{/*{
  "FamilyRelief": {
    "hero": {
      "title": "Family Relief & Counseling",
      "description": "Practical and emotional support for family caregivers — guidance, rest, and a helping hand when it’s needed most."
    },
    "overview": {
      "title": "Overview",
      "description": "Caring for a loved one can be challenging. We provide practical help, emotional guidance, and respite to prevent caregiver burnout."
    },
    "careIncludes": {
      "title": "Our Care Includes",
      "description": [
        "Guidance for caregiver support and relief",
        "Respite care to allow rest and recovery",
        "Emotional counseling and practical tips",
        "Connecting families with resources and services"
      ]
    },
    "benefits": {
      "title": "Benefits",
      "description": [
        "Reduced caregiver stress",
        "Better balance between caregiving and personal life",
        "Practical advice and emotional support for families"
      ]
    },
    "cta": {
      "title": "Get Started",
      "description": "Let us support you and your family. Contact us today to learn more about family relief and counseling services."
    }
  }
}*/}


const FamilyRelief = () => {
  const {t} = useTranslation('family')
  return (
    <main className="w-[90%] p-8 shadow-lg shadow-black/10 rounded-xl bg-white flex flex-col gap-12 justify-start items-center">

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 items-center">
        <Image 
          src="/images/family-relief.png" 
          width={400} 
          height={400} 
          className="rounded-lg object-cover shadow-sm"
          alt="Family Relief & Counseling"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">{t('FamilyRelief.hero.title')}</h1>
          <p className="text-gray-700 text-lg">
            {t('FamilyRelief.hero.description')}
          </p>
          <Link href='/help'><button className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold w-fit">
            Get In Touch
          </button></Link>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('FamilyRelief.overview.title')}</legend>
          <p className="text-gray-700 mt-2 leading-relaxed">
            {t('FamilyRelief.overview.description')}
          </p>
        </fieldset>
      </section>

      {/* Our Care Includes */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('FamilyRelief.careIncludes.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('FamilyRelief.careIncludes.description.0')}</li>
              <li>{t('FamilyRelief.careIncludes.description.1')}</li>
                <li>{t('FamilyRelief.careIncludes.description.2')}</li>
                  <li>{t('FamilyRelief.careIncludes.description.3')}</li>
          </ul>
        </fieldset>
      </section>

      {/* Benefits */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('FamilyRelief.benefits.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('FamilyRelief.benefits.description.0')}</li>
              <li>{t('FamilyRelief.benefits.description.1')}</li>
                 <li>{t('FamilyRelief.benefits.description.2')}</li>
          </ul>
        </fieldset>
      </section>

      {/* CTA */}
      <section className="w-full text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t('FamilyRelief.cta.title')}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {t('FamilyRelief.cta.description')}
        </p>
        <Link href='/help'><button className="bg-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold">
          Contact Us
        </button></Link>
      </section>

    </main>
  );
};

export default FamilyRelief;
