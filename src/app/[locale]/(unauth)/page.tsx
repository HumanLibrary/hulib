import { getTranslations } from 'next-intl/server';
import React from 'react';

import About from '@/layouts/About';
import FAQs from '@/layouts/FAQs';
import Features from '@/layouts/Features';
import Hero from '@/layouts/Hero';
// import Features from '@/layouts/Features';
// import Hero from '@/layouts/Hero';
import Newsletter from '@/layouts/Newsletter';
import Sponsors from '@/layouts/Sponsors';
import Testimonial from '@/layouts/Testimonial';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'Index' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      {/* <PromotedEvent /> */}
      <Hero />
      <Features />
      <About />
      <Testimonial />
      <Sponsors />
      <FAQs />
      <Newsletter />
    </>
  );
}
