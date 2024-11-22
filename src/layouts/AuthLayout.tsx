import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';
import React from 'react';

import { Logo } from '@/components/Logo';
import { mergeClassnames } from '@/components/private/utils';

type IAuthLayoutProps = {
  illustrationImage: StaticImageData;
  children: ReactNode;
  isLogin?: boolean;
};

const AuthLayout = (props: IAuthLayoutProps) => (
  <>
    <div
      className={mergeClassnames(
        'hidden h-screen w-5/12 items-center justify-start bg-yellow-90 sm:flex',
        props.isLogin && 'bg-[#A6D4FF]',
      )}
    >
      <Image
        alt="Illustration"
        className="h-full w-full object-contain object-center"
        src={props.illustrationImage}
        width={600}
        height={1024}
      />
    </div>
    <div className="h-screen w-full sm:w-7/12">
      <div className="m-auto flex h-full w-1/2 max-w-[420px] flex-col items-center justify-center gap-8">
        <Logo />
        {props.children}
      </div>
    </div>
  </>
);

export { AuthLayout };
