import { notFound } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import * as React from 'react';

import AvatarUploader from '@/components/AvatarUploader';
import { ProfileForm } from '@/layouts/profile/ProfileForm';
import { authOptions } from '@/libs/NextAuthOption';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'MyProfile' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index() {
  const session = await getServerSession(authOptions);

  if (!session) return notFound();

  return (
    <div className="mx-auto flex w-5/6 flex-1 flex-col gap-20 text-sm leading-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-[40px] font-medium">Personal Information</h1>
        <p>
          Your profile is only visible to mentors that you send applications to.
          It is not indexed on search engines like Google.
        </p>
      </div>
      <div className="flex gap-8">
        <div className="flex h-fit w-1/4 flex-col items-center gap-8 rounded-lg bg-white p-5">
          <h6 className="text-center text-xl font-medium leading-7">
            Profile Avatar
          </h6>
          <AvatarUploader />
        </div>
        <div className="flex w-3/4 flex-col gap-8 rounded-lg bg-white p-5">
          <h6 className="text-xl font-medium leading-7">Information</h6>
          <ProfileForm />
        </div>
      </div>
    </div>
  );
}
