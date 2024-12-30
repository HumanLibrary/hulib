'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import SpecialSection from '@/layouts/SpecialSection';
import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const preLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 10000);
    };
    preLoad();
  }, []);

  if (loading) {
    return <SpecialSection />;
  }

  return (
    <BaseTemplate>
      <div className="w-screen pb-8 pt-16 text-xl sm:pt-24 [&_ul]:my-6">
        {children}
      </div>
    </BaseTemplate>
  );
}
