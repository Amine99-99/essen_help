'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';


{/*
{
  "TreatmentCare": {
    "hero": {
      "title": "Treatment Care",
      "description": "Professional medical care at home, including wound management, medication, and injections."
    },
    "overview": {
      "title": "Overview",
      "description": "Our qualified nurses provide treatment care in the comfort of your home. From medication administration to monitoring your health, we ensure safe and reliable support."
    },
    "careIncludes": {
      "title": "Our Care Includes",
      "description": [
        "Medication management and administration",
        "Wound care and dressing changes",
        "Injections and vital health monitoring",
        "Cooperation with your doctor and therapy plans"
      ]
    },
    "benefits": {
      "title": "Benefits",
      "description": [
        "Receive professional care without leaving home",
        "Peace of mind knowing health is monitored closely",
        "Care services covered by health insurance (SGB V)"
      ]
    },
    "cta": {
      "title": "Get Started",
      "description": "Contact us today to arrange personalized treatment care at home and ensure your health is in good hands."
    }
  }
}
*/}

const TreatmentCare = () => {
  const {t} = useTranslation('treatment')
  return (
    <main className="w-[90%] p-8 shadow-lg shadow-black/10 rounded-xl bg-white flex flex-col gap-12 justify-start items-center">

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 items-center">
        <Image 
          src="/images/bg-2.png" 
          width={550} 
          height={550} 
          className="rounded-lg object-cover shadow-sm"
          alt="Treatment Care"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">{t('TreatmentCare.hero.title')}</h1>
          <p className="text-gray-700 text-lg">
            {t('TreatmentCare.hero.description')}
           
          </p>
          <Link href='/help'><button className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold w-fit">
            {t('TreatmentCare.hero.get_in_touch')}
          </button></Link>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('TreatmentCare.overview.title')}</legend>
          <p className="text-gray-700 mt-2 leading-relaxed">
            {t('TreatmentCare.overview.description')}
          </p>
        </fieldset>
      </section>

      {/* Our Care Includes */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('TreatmentCare.careIncludes.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('TreatmentCare.careIncludes.description.0')}</li>
              <li>{t('TreatmentCare.careIncludes.description.1')}</li>
                <li>{t('TreatmentCare.careIncludes.description.2')}</li>
                  <li>{t('TreatmentCare.careIncludes.description.3')}</li>
          </ul>
        </fieldset>
      </section>

      {/* Benefits */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('TreatmentCare.benefits.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('TreatmentCare.benefits.description.0')}</li>
              <li>{t('TreatmentCare.benefits.description.1')}</li>
                <li>{t('TreatmentCare.benefits.description.2')}</li>
          </ul>
        </fieldset>
      </section>

      {/* CTA */}
      <section className="w-full text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t('TreatmentCare.cta.title')}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {t('TreatmentCare.cta.description')}
        </p>
        <Link href='/help'><button className="bg-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold">
         {t('TreatmentCare.hero.contact')}
        </button></Link>
      </section>

    </main>
  );
};

export default TreatmentCare;
