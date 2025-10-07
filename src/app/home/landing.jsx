'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

// Service card component
const ServiceIcon = ({ icon, label, description }) => (
  <div className="flex flex-col items-center p-6 hover:scale-105 transition border rounded-lg shadow-sm bg-white">
    <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center mb-4 text-2xl text-white">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-center mb-2">{label}</h3>
    <p className="text-sm text-center text-gray-600">{description}</p>
  </div>
);

// Step icons
const StepIcon = ({ step, label }) => (
  <div className="flex flex-col items-center p-4">
    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-2">
      <span role="img" aria-label={label} className="text-xl">{step}</span>
    </div>
    <p className="text-center">{label}</p>
  </div>
);
{/*{
  "Landing": {
    "hero": {
      "title": "Helping You When You Need It Most",
      "description": "Providing compassionate care and support at home, whenever you need us.",
      "cta": "Request Help Now"
    },
    "whoWeCareFor": {
      "title": "Who We Care For",
      "description": "Our care is for people who wish to live safely, independently, and with dignity in their own homes. Whether you’re a senior who values comfort, living with a disability and need daily support, or recovering after a hospital stay — we’re here to help you feel confident and cared for.",
      "groups": [
        {
          "icon": "🧓",
          "title": "Seniors",
          "description": "For older adults who wish to stay independent at home — we bring daily support, safety, and companionship."
        },
        {
          "icon": "♿",
          "title": "People with Disabilities",
          "description": "Compassionate care for those living with physical or mental challenges — with respect and encouragement for independence."
        },
        {
          "icon": "🏥",
          "title": "Post-Hospital Clients",
          "description": "Gentle professional support during recovery — for peace of mind and faster healing in your own home."
        }
      ]
    },
    "services": {
      "title": "Our Compassionate Services",
      "items": [
        {
          "icon": "🧑‍⚕️",
          "label": "Basic Care (Grundpflege)",
          "description": "Daily life assistance — bathing, mobility, dressing, and personal hygiene, covered by long-term care insurance (SGB XI)."
        },
        {
          "icon": "💉",
          "label": "Treatment Care (Behandlungspflege)",
          "description": "Medication management, wound dressing, injections, and health monitoring at home (SGB V)."
        },
        {
          "icon": "🏠",
          "label": "Home & Household Help",
          "description": "Support with cleaning, laundry, and organizing your home — keeping your space peaceful and safe."
        },
        {
          "icon": "🚗",
          "label": "Accompanied Visits & Errands",
          "description": "Support for medical appointments, shopping trips, or social activities — so clients stay active and connected."
        },
        {
          "icon": "🤝",
          "label": "Palliative & End-of-Life Care",
          "description": "Sensitive, holistic care focused on comfort and dignity for those in advanced stages of illness."
        },
        {
          "icon": "🌿",
          "label": "Family Relief & Counseling",
          "description": "Practical and emotional support for family caregivers — guidance, rest, and a helping hand when it’s needed most."
        }
      ]
    },
    "journey": {
      "title": "Your Journey to Care",
      "steps": [
        "Contact us via form or phone call to discuss your needs.",
        "We create a personalized care plan and assign a trusted helper.",
        "Care begins quickly and safely in the comfort of your home."
      ]
    },
    "cta": {
      "title": "Ready to start your care?",
      "description": "Contact us today for a free, no-obligation consultation.",
      "button": "Get in Touch"
    }
  }
}
*/}

const Landing = () => {
  const {t} = useTranslation('landing')
  return (
    <div className="font-sans text-gray-800 flex justify-start flex-col items-center">
      
      {/* Hero Section */}
      <section 
        className="flex w-full h-[70vh] items-center justify-center px-6 py-20 relative overflow-hidden" 
        style={{
          backgroundImage: "url('/images/bg-2.png')", 
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-80 z-0"></div> 
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4 text-green-900">{t('Landing.hero.title')}</h1>
          <p className="text-xl mb-6 text-gray-700">{t('Landing.hero.description')}</p>
          <Link href='/help'>
            <button className="bg-green-800 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-600 transition text-lg font-semibold">
             {t('Landing.hero.cta')}
            </button>
          </Link>
        </div>
      </section>

      {/* Who We Care For Section */}
      <section className="w-full px-6 py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-extrabold text-green-800 mb-10">{t('Landing.whoWeCareFor.title')}</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12">
          {t('Landing.whoWeCareFor.description')}
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="text-4xl mb-3">🧓</div>
            <h3 className="font-semibold text-xl text-green-800 mb-2">{t('Landing.whoWeCareFor.groups.0.title')}</h3>
            <p className="text-gray-600 text-base">
            {t('Landing.whoWeCareFor.groups.0.description')}
            </p>
          </div>
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="text-4xl mb-3">♿</div>
            <h3 className="font-semibold text-xl text-green-800 mb-2">{t('Landing.whoWeCareFor.groups.1.title')}</h3>
            <p className="text-gray-600 text-base">
              {t('Landing.whoWeCareFor.groups.1.description')}
            </p>
          </div>
          <div className="bg-white border rounded-xl shadow-sm p-6 hover:shadow-md transition">
            <div className="text-4xl mb-3">🏥</div>
            <h3 className="font-semibold text-xl text-green-800 mb-2">{t('Landing.whoWeCareFor.groups.2.title')}</h3>
            <p className="text-gray-600 text-base">
              {t('Landing.whoWeCareFor.groups.2.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full px-6 py-24 bg-white">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-green-800">{t('Landing.services.title')}</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Link href='/services/b_care'><ServiceIcon icon="🧑‍⚕️" label={t('Landing.services.items.0.label')} description={t('Landing.services.items.0.description')} /></Link>
        
          <Link href='/services/treatment'><ServiceIcon icon="💉" label={t('Landing.services.items.1.label')} description={t('Landing.services.items.1.description')} /></Link>
          <Link href='/services/help_home'><ServiceIcon icon="🏠" label={t('Landing.services.items.2.label')} description={t('Landing.services.items.2.description')}/></Link>
          
          <Link href='/services/accompany'><ServiceIcon icon="🚗" label={t('Landing.services.items.3.label')} description={t('Landing.services.items.3.description')} /></Link>
          <Link href='/services/palliative'><ServiceIcon icon="🤝" label={t('Landing.services.items.4.label')} description={t('Landing.services.items.4.description')}/></Link> 
          <Link href='/services/family_relief'><ServiceIcon icon="🌿" label={t('Landing.services.items.5.label')} description={t('Landing.services.items.5.description')} /></Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full px-6 py-20 bg-white">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-green-800">{t('Landing.journey.title')}</h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          <StepIcon step="1" label={t('Landing.journey.steps.0')} />
          <div className="hidden md:flex items-center">
            <span className="text-3xl text-green-400">→</span>
          </div>
          <StepIcon step="2" label={t('Landing.journey.steps.1')}  />
          <div className="hidden md:flex items-center">
            <span className="text-3xl text-green-400">→</span>
          </div>
          <StepIcon step="3" label={t('Landing.journey.steps.2')}  />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full bg-green-900 text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">{t('Landing.cta.title')} </h3>
        <p className="text-lg mb-6">{t('Landing.cta.description')} </p>
        <Link href='/contact'>
          <button className="bg-white text-green-800 px-8 py-4 rounded-full shadow-lg hover:bg-gray-200 transition text-lg font-semibold uppercase tracking-wider">
          {t('Landing.cta.button')} 
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Landing;
