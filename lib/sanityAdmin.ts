// lib/sanityAdmin.ts
import { createClient } from '@sanity/client';

export const adminClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-01-01',
  token: process.env.SANITY_ADMIN_TOKEN!,
  useCdn: false,
});
