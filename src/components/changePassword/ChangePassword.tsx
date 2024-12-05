'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Eye } from '@phosphor-icons/react';
import * as React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import Button from '@/components/button/Button';
import Form from '@/components/form/Form';
import TextInput from '@/components/textInput/TextInput';
import ConfirmChangePassword from '@/layouts/ConfirmChangePassword';
import { ChangePasswordValidation } from '@/validations/ChangePasswordValidation';

const ChangePassword = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof ChangePasswordValidation>>({
    resolver: zodResolver(ChangePasswordValidation),
  });

  const [isOpen, setIsOpen] = useState(false);

  const onHandleClickChangeBtn = () => {
    if (isValid) {
      setIsOpen(!isOpen);
    }
  };

  const onHandleSubmit = handleSubmit((data) => {
    console.log('input success', data);
  });

  return (
    <>
      <div>
        <h2 className="text-[2rem] font-medium leading-[40px] tracking-[-2%]">
          Change Your Password
        </h2>
        <Form
          className="mt-[60px] flex w-full flex-col items-center gap-4"
          onSubmit={handleSubmit(onHandleClickChangeBtn)}
        >
          <Form.Item>
            <TextInput
              {...register('oldPassword')}
              id="oldPassword"
              type="password"
              label="Old Password"
              showPasswordText={<Eye />}
              isError={!!errors.oldPassword}
              hintText={
                errors.oldPassword?.message ??
                'Password must have at least 8 characters'
              }
            />
          </Form.Item>
          <Form.Item>
            <TextInput
              {...register('newPassword')}
              id="newPassword"
              type="password"
              label="New Password"
              showPasswordText={<Eye />}
              isError={!!errors.newPassword}
              hintText={
                errors.newPassword?.message ??
                'Password must have at least 8 characters'
              }
            />
          </Form.Item>
          <Form.Item>
            <TextInput
              {...register('confirmPassword')}
              id="confirmPassword"
              type="password"
              label="Re-enter New Password"
              showPasswordText={<Eye />}
              isError={!!errors.confirmPassword}
              hintText={errors.confirmPassword?.message}
            />
          </Form.Item>
          <Form.Item className="py-4">
            <Button type="submit" value="Submit" className="w-full">
              Change
            </Button>
          </Form.Item>
          <a
            className="cursor-pointer text-[1rem] font-medium leading-5 text-[#0442BF] underline"
            href="/auth/forgot-password"
          >
            Forgot Passwords?
          </a>
        </Form>
      </div>
      <ConfirmChangePassword
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        onSuccess={onHandleSubmit}
      />
    </>
  );
};

export default ChangePassword;
