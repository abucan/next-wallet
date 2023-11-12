import * as z from 'zod';

export const AccountColor = z.enum([
  'red',
  'green',
  'blue',
  'yellow',
]);
export const AccountType = z.enum(['general', 'cash', 'credit_card']);
