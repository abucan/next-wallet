import * as z from 'zod';

export const AccountColor = z.enum([
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'purple',
  'pink',
  'brown',
  'cyan',
  'magenta',
  'lime',
  'indigo',
  'teal',
  'lavender',
  'maroon',
  'navy',
  'olive',
  'peru',
  'silver',
  'tomato',
]);

export const AccountType = z.enum([
  'general',
  'cash',
  'credit_card',
  'savings',
  'checking',
  'investment',
  'loan',
  'retirement',
  'crypto',
  'emergency_fund',
]);
