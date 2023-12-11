import * as z from 'zod';
import { AccountColor } from '../enums/app_enums';
import {
  AccountType,
  RecordType,
  CategoryType,
} from '@prisma/client';

export const accountSchema = z.object({
  name: z.string().min(3, {
    message: 'Account name must be at least 3 characters long',
  }),
  color: AccountColor,
  type: z.nativeEnum(AccountType),
  startedBalance: z.coerce
    .number()
    .min(1, { message: 'Please enter a value greater than 0' }),
});

export const recordSchema = z.object({
  amount: z.coerce
    .number()
    .min(1, { message: 'Please enter a value greater than 0' }),
  recordType: z.nativeEnum(RecordType),
  category: z.nativeEnum(CategoryType),
  accountId: z.string(),
  createdAt: z.any(),
});

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Name is too short' })
    .max(20, 'Username is too long'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, 'Password is required').min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});
