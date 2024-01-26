/* eslint-disable import/prefer-default-export */
import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const Env = createEnv({
  // server: {
  //   CLERK_SECRET_KEY: z.string().min(1),
  //   DATABASE_URL: z.string().min(1),
  //   DATABASE_AUTH_TOKEN: z.string().optional(),
  // },
  client: {
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: z.string().trim().min(1),
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID: z.string().trim().min(1),
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: z.string().trim().min(1),
  },
  // You need to destructure all the keys manually
  runtimeEnv: {
    // DATABASE_URL: process.env.DATABASE_URL,
    // DATABASE_AUTH_TOKEN: process.env.DATABASE_AUTH_TOKEN,
    // CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY:
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  },
});
