/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  server: {
    CLIENT_EMAIL: z.string().min(1),
    CLIENT_ID: z.string().min(1),
    PRIVATE_KEY: z.string().min(1),
    SPREADSHEET_ID: z.string().min(1),
    CLOUDINARY_API_KEY: z.string().min(1),
    CLOUDINARY_API_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_REACT_APP_BACKEND_VERSION: z.string().trim().min(1),
    NEXT_PUBLIC_REACT_APP_BACKEND_ENDPOINT: z.string().trim().min(1),
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().trim().min(1),
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().trim().min(1),
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().trim().min(1),
    NEXT_PUBLIC_CONTACT_EMAIL: z.string().trim().email(),
    NEXT_PUBLIC_CONTACT_PHONE_NUMBER: z.string().trim().min(9),
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string().trim().min(9),
    NEXT_PUBLIC_UPLOAD_PRESET: z.string().trim().min(9),
  },
  // You need to destructure all the keys manually
  runtimeEnv: {
    CLIENT_EMAIL: process.env.CLIENT_EMAIL,
    CLIENT_ID: process.env.CLIENT_ID,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    SPREADSHEET_ID: process.env.SPREADSHEET_ID,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    NEXT_PUBLIC_REACT_APP_BACKEND_VERSION:
      process.env.NEXT_PUBLIC_REACT_APP_BACKEND_VERSION,
    NEXT_PUBLIC_REACT_APP_BACKEND_ENDPOINT:
      process.env.NEXT_PUBLIC_REACT_APP_BACKEND_ENDPOINT,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    NEXT_PUBLIC_CONTACT_PHONE_NUMBER:
      process.env.NEXT_PUBLIC_CONTACT_PHONE_NUMBER,
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:
      process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    NEXT_PUBLIC_UPLOAD_PRESET: process.env.NEXT_PUBLIC_UPLOAD_PRESET,
  },
});
