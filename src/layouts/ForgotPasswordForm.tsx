'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import Button from '@/components/button/Button';
import Form from '@/components/form/Form';
import TextInput from '@/components/textInput/TextInput';
import { ForgotPasswordValidation } from '@/validations/ForgotPasswordValidation';

type SendLinkEmailSuccessProps = {
  inputEmail: string;
};

const SendLinkEmailSuccess = ({ inputEmail }: SendLinkEmailSuccessProps) => {
  const router = useRouter();

  return (
    <>
      <div className="text-center text-neutral-10">
        <div className="flex items-center gap-x-2 py-2">
          <Image
            src="/assets/icons/GreenEmail-icon.svg"
            width={45.5}
            height={35}
            alt="arrow-icon"
            loading="lazy"
          />
          <h2 className="text-[2rem] font-medium leading-[40px] tracking-[-2%]">
            Check your email
          </h2>
        </div>

        <p className="mt-4 text-[1rem] font-normal leading-6 tracking-[0.5%] text-neutral-40">
          A password reset link has been send to your email{' '}
          <a
            target="_blank"
            href="https://mail.google.com/mail/u/1/#inbox"
            rel="noopener noreferrer"
            className="text-[1rem] font-medium leading-5 text-primary-50 underline"
          >
            {inputEmail}
          </a>
        </p>
      </div>
      <button
        type="button"
        className="flex items-center gap-x-2"
        onClick={() => router.push('/login')}
      >
        <Image
          src="/assets/icons/ArrowLeft-icon.svg"
          width={24}
          height={24}
          alt="arrow-icon"
          loading="lazy"
        />
        <span className="text-[1rem] font-medium leading-5 text-primary-50 underline">
          Back to login
        </span>
      </button>
    </>
  );
};

const ForgotPasswordForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof ForgotPasswordValidation>>({
    resolver: zodResolver(ForgotPasswordValidation),
  });

  const [inputEmail, setInputEmail] = React.useState<string>('');
  const [submitSuccess, setSubmitSuccess] = React.useState<boolean>(false);

  const onHandleSubmit = handleSubmit((data) => {
    if (data.email) {
      setInputEmail(data.email);
      setSubmitSuccess(true);
    }
  });

  if (submitSuccess) return <SendLinkEmailSuccess inputEmail={inputEmail} />;

  return (
    <>
      <div className="text-center text-neutral-10">
        <h2 className="text-[2rem] font-medium leading-[40px] tracking-[-2%]">
          Forgot your password?
        </h2>
        <p className="text-[1rem] font-normal leading-6 tracking-[0.5%] text-neutral-40">
          No worries, enter your account email and we’ll send you a link to
          reset your password.
        </p>
      </div>
      <Form className="flex w-full flex-col gap-4">
        <Form.Item>
          <TextInput
            id="email"
            type="email"
            label="Email"
            placeholder="hulib@gmail.com"
            className={
              errors.email?.message && 'border border-solid border-red-500'
            }
            {...register('email')}
          />
          {errors.email?.message && (
            <p className="mt-2 text-xs font-normal leading-[14px] text-red-50">
              {errors.email?.message}
            </p>
          )}
        </Form.Item>
        <Form.Item className="py-4">
          <Button
            type="submit"
            value="Submit"
            className="w-full"
            onClick={onHandleSubmit}
          >
            Send link to email
          </Button>
        </Form.Item>
      </Form>

      <button
        type="button"
        className="flex items-center gap-x-2"
        onClick={() => router.push('/login')}
      >
        <Image
          src="/assets/icons/ArrowLeft-icon.svg"
          width={24}
          height={24}
          alt="arrow-icon"
          loading="lazy"
        />
        <span className="text-[1rem] font-medium leading-5 text-primary-50 underline">
          Back to login
        </span>
      </button>
    </>
  );
};

export { ForgotPasswordForm };