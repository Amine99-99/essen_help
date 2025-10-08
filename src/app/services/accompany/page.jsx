'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';

{/*
{
  "AccompaniedVisits": {
    "hero": {
      "title": "Accompanied Visits & Errands",
      "description": "Support for medical appointments, shopping trips, or social activities — helping clients stay active and connected."
    },
    "overview": {
      "title": "Overview",
      "description": "We accompany clients to appointments, errands, and social activities, providing both practical assistance and emotional support during outings."
    },
    "careIncludes": {
      "title": "Our Care Includes",
      "description": [
        "Transportation to medical or therapy appointments",
        "Assistance with shopping and errands",
        "Companionship for social or recreational activities",
        "Support with planning and organization of trips"
      ]
    },
    "benefits": {
      "title": "Benefits",
      "description": [
        "Stay active and socially connected",
        "Reduce anxiety and stress during outings",
        "Peace of mind for families knowing loved ones are accompanied safely"
      ]
    },
    "cta": {
      "title": "Get Started",
      "description": "Reach out today to arrange accompanied visits and errands, keeping your loved ones engaged and supported."
    }

       "get_in_touch": "Get In Touch",
    "contact": "Contact Us"
  }
}

*/}

const AccompaniedVisits = () => {
  const {t} = useTranslation('accompanied')
  return (
    <main className="w-[90%] p-8 shadow-lg shadow-black/10 rounded-xl bg-white flex flex-col gap-12 justify-start items-center">

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 items-center">
        <Image 
          src="/images/accompanied-visits.png" 
          width={400} 
          height={400} 
          className="rounded-lg object-cover shadow-sm"
          alt="Accompanied Visits & Errands"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">{t('AccompaniedVisits.hero.title')}</h1>
          <p className="text-gray-700 text-lg">
            {t('AccompaniedVisits.hero.description')}
          
          </p>
          <Link href='/help'><button className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold w-fit">
           {t('AccompaniedVisits.hero.get_in_touch')}
          </button></Link>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('AccompaniedVisits.overview.title')}</legend>
          <p className="text-gray-700 mt-2 leading-relaxed">
            {t('AccompaniedVisits.overview.description')}
          </p>
        </fieldset>
      </section>

      {/* Our Care Includes */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('AccompaniedVisits.careIncludes.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('AccompaniedVisits.careIncludes.description.0')}</li>
            <li>{t('AccompaniedVisits.careIncludes.description.1')}</li>
             <li>{t('AccompaniedVisits.careIncludes.description.2')}</li>
              <li>{t('AccompaniedVisits.careIncludes.description.3')}</li>
          </ul>
        </fieldset>
      </section>

      {/* Benefits */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('AccompaniedVisits.benefits.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('AccompaniedVisits.benefits.description.0')}</li>
             <li>{t('AccompaniedVisits.benefits.description.1')}</li>
              <li>{t('AccompaniedVisits.benefits.description.2')}</li>
          </ul>
        </fieldset>
      </section>

      {/* CTA */}
      <section className="w-full text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t('AccompaniedVisits.cta.title')}</h2>
        {t('AccompaniedVisits.cta.description')}
        <p className="text-gray-700 mb-6 leading-relaxed">
        </p>
        <Link href='/help'><button className="bg-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold">
           {t('AccompaniedVisits.hero.contact')}
        </button></Link>
      </section>

    </main>
  );
};

export default AccompaniedVisits;
