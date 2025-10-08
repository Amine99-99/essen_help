'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';
{/*// English
{
  "PalliativeCare": {
    "hero": {
      "title": "Palliative & End-of-Life Care",
      "description": "Sensitive, holistic care focused on comfort and dignity for those in advanced stages of illness."
    },
    "overview": {
      "title": "Overview",
      "description": "We provide compassionate care for clients with life-limiting conditions, ensuring comfort, dignity, and emotional support for both clients and their families."
    },
    "careIncludes": {
      "title": "Our Care Includes",
      "description": [
        "Pain and symptom management",
        "Emotional support for clients and families",
        "Assistance with daily needs",
        "Collaboration with medical teams for coordinated care"
      ]
    },
    "benefits": {
      "title": "Benefits",
      "description": [
        "Maintain dignity and comfort in final stages",
        "Support for families during challenging times",
        "Professional care that respects client wishes"
      ]
    },
    "cta": {
      "title": "Get Started",
      "description": "Contact us to learn how our palliative care services can provide comfort and support during this sensitive time."
    }
  }
}*/}

const PalliativeCare = () => {
  const {t} = useTranslation('palliative')
  return (
    <main className="w-[90%] p-8 shadow-lg shadow-black/10 rounded-xl bg-white flex flex-col gap-12 justify-start items-center">

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 items-center">
        <Image 
          src="/images/palliative-care.png" 
          width={400} 
          height={400} 
          className="rounded-lg object-cover shadow-sm"
          alt="Palliative & End-of-Life Care"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">{t('PalliativeCare.hero.title')}</h1>
          <p className="text-gray-700 text-lg">
            {t('PalliativeCare.hero.description')}
          </p>
          <Link href='/help'><button className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold w-fit">
            {t('PalliativeCare.hero.get_in_touch')}
          </button></Link>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('PalliativeCare.overview.title')}</legend>
          <p className="text-gray-700 mt-2 leading-relaxed">
            {t('PalliativeCare.overview.description')}
          </p>
        </fieldset>
      </section>

      {/* Our Care Includes */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('PalliativeCare.careIncludes.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('PalliativeCare.careIncludes.description.0')}</li>
             <li>{t('PalliativeCare.careIncludes.description.1')}</li>
              <li>{t('PalliativeCare.careIncludes.description.2')}</li>
               <li>{t('PalliativeCare.careIncludes.description.3')}</li>
         
          </ul>
        </fieldset>
      </section>

      {/* Benefits */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('PalliativeCare.benefits.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('PalliativeCare.benefits.description.0')}</li>
              <li>{t('PalliativeCare.benefits.description.1')}</li>
                <li>{t('PalliativeCare.benefits.description.2')}</li>
            
          </ul>
        </fieldset>
      </section>

      {/* CTA */}
      <section className="w-full text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t('PalliativeCare.cta.title')}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          {t('PalliativeCare.cta.description')}
        </p>
        <Link href='/help'><button className="bg-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold">
          {t('PalliativeCare.hero.contact')}
        </button></Link>
      </section>

    </main>
  );
};

export default PalliativeCare;
