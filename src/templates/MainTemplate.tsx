'use client';

import localFont from 'next/font/local';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

import CustomToastifyContainer from '@/components/CustomToastifyContainer';
import type { WithChildren } from '@/components/private/types';
import { mergeClassnames } from '@/components/private/utils';
import FooterWebApp from '@/layouts/FooterWebApp';
import Header from '@/layouts/webapp/Header';
import { useAppDispatch } from '@/libs/hooks';
import { useGetPersonalInfoQuery } from '@/libs/services/modules/auth';
import { setUserInfo } from '@/libs/store/authentication';

export const poppins = localFont({
  src: [
    {
      path: '../styles/fonts/SVN-Poppins-ExtraLight.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../styles/fonts/SVN-Poppins-ExtraLightItalic.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../styles/fonts/SVN-Poppins-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../styles/fonts/SVN-Poppins-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../styles/fonts/SVN-Poppins-Medium.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../styles/fonts/SVN-Poppins-MediumItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../styles/fonts/SVN-Poppins-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../styles/fonts/SVN-Poppins-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../styles/fonts/SVN-Poppins-ExtraBold.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../styles/fonts/SVN-Poppins-ExtraBoldItalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../styles/fonts/SVN-Poppins-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../styles/fonts/SVN-Poppins-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
  ],
});

const MainTemplate = (props: WithChildren) => {
  const { data, error } = useGetPersonalInfoQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setUserInfo(data));
  }, [data]);

  if (error) return redirect('/auth/login');

  return (
    <div
      className={mergeClassnames(
        poppins.className,
        'relative w-screen bg-neutral-98 antialiased overflow-hidden',
      )}
    >
      <div className="mx-auto flex max-w-full flex-col items-center justify-center">
        <Header />

        <main>{props.children}</main>

        <FooterWebApp />
      </div>

      <CustomToastifyContainer />
    </div>
  );
};

export { MainTemplate };
