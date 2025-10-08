'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { useTranslation } from 'react-i18next';


{/*{
  "HomeHelp": {
    "hero": {
      "title": "Home & Household Help",
      "description": "Support with cleaning, laundry, and preparing meals — keeping your environment safe, tidy, and filled with comfort."
    },
    "overview": {
      "title": "Overview",
      "description": "Our caregivers not only maintain a peaceful, organized home — they also assist with meal planning and preparation. We ensure every day feels comfortable, safe, and nourishing for your body and mind."
    },
    "careIncludes": {
      "title": "Our Care Includes",
      "description": [
        "Cleaning and tidying living spaces",
        "Laundry and wardrobe organization",
        "Meal preparation, portioning, and light cooking assistance",
        "Grocery organization and kitchen safety support",
        "Maintaining a safe, comfortable home environment"
      ]
    },
    "benefits": {
      "title": "Benefits",
      "description": [
        "Enjoy healthy, freshly prepared meals every day",
        "Keep your home clean and organized",
        "Reduce stress and maintain independence",
        "Feel safe and supported in your own home"
      ]
    },
    "cta": {
      "title": "Get Started",
      "description": "Keep your home — and your daily routine — full of comfort and care. Contact us today to get household support tailored to your needs."
    }
  }
}
*/}

const HomeHelp = () => {
  const {t} = useTranslation('home_care')
  return (
    <main className="w-[90%] p-8 shadow-lg shadow-black/10 rounded-xl bg-white flex flex-col gap-12 justify-start items-center">

      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 items-center">
        <Image 
         src="/images/bg-2.png" 
          width={550} 
          height={550} 
          className="rounded-lg object-cover shadow-sm"
          alt="Home & Household Help"
        />
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">{t('HomeHelp.hero.title')}</h1>
          <p className="text-gray-700 text-lg">
            {t('HomeHelp.hero.description')}
          </p>
          <Link href='/help'><button className="bg-green-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold w-fit">
           {t('HomeHelp.hero.get_in_touch')}
          </button>
        </Link>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('HomeHelp.overview.title')}</legend>
          <p className="text-gray-700 mt-2 leading-relaxed">
            {t('HomeHelp.overview.description')}
            
          </p>
        </fieldset>
      </section>

      {/* Our Care Includes Section */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('HomeHelp.careIncludes.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('HomeHelp.careIncludes.description.0')}</li>
               <li>{t('HomeHelp.careIncludes.description.1')}</li>
                  <li>{t('HomeHelp.careIncludes.description.2')}</li>
                     <li>{t('HomeHelp.careIncludes.description.3')}</li>
                        <li>{t('HomeHelp.careIncludes.description.4')}</li>
           
          </ul>
        </fieldset>
      </section>

      {/* Benefits Section */}
      <section className="w-full">
        <fieldset className="border rounded-xl p-6 bg-gray-50">
          <legend className="text-green-800 font-semibold text-lg px-2">{t('HomeHelp.benefits.title')}</legend>
          <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 leading-relaxed">
            <li>{t('HomeHelp.benefits.description.0')}</li>
              <li>{t('HomeHelp.benefits.description.1')}</li>
                <li>{t('HomeHelp.benefits.description.2')}</li>
                  <li>{t('HomeHelp.benefits.description.3')}</li>
         
          </ul>
        </fieldset>
      </section>

      {/* CTA Section */}
      <section className="w-full text-center mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">{t('HomeHelp.cta.title')}</h2>
        <p className="text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
        {t('HomeHelp.cta.description')}.
        </p>
        <Link href='/help'><button className="bg-green-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-600 transition font-semibold">
          {t('HomeHelp.hero.contact')}
        </button></Link>
      </section>

    </main>
  );
};

export default HomeHelp;
