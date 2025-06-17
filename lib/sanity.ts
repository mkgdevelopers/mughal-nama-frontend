import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: 'iu2q98xc', // Replace this
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-01-01',
});
