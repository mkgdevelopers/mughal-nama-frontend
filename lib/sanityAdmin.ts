import { createClient } from '@sanity/client';

export const adminClient = createClient({
  projectId: 'iu2q98xc', // replace this
  dataset: 'production',
  apiVersion: '2023-01-01',
  token: 'skvXAdErS7HM8uYkA2dWhlfbFaiUw2aEThIfEaeYhvVOaZq62ZaqWA8KIADEKTLmwa6biXOSduRidPBTWwSWSpJhaJhVA0sWj5OgdSkllGG7RZVPwSIWVAPOnErH3e3vnWDAzzI1J2eVNGY043NWfkLewZ3N1VVmg37EKFiqZwU8eoTcY9JS',   // 🔐 use secret token
  useCdn: false,
});
