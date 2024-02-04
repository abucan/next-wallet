import * as z from 'zod';
import { AccountColor } from '../enums/app_enums';
import {
  AccountType,
  RecordType,
  CategoryType,
  UserRole,
} from '@prisma/client';

export const RegisterSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
  name: z.string().min(1, {
    message: 'Name is required',
  }),
});

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, {
    message: 'Password is required',
  }),
});

export const accountSchema = z.object({
  name: z.string().min(3, {
    message: 'Account name must be at least 3 characters long',
  }),
  color: AccountColor,
  type: z.nativeEnum(AccountType),
  startedBalance: z.coerce.number(),
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

export const SettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(6)),
    newPassword: z.optional(z.string().min(6)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: 'New password is required.',
      path: ['newPassword'],
    },
  )
  .refine(
    (data) => {
      if (!data.password && data.newPassword) {
        return false;
      }
      return true;
    },
    {
      message: 'Password is required.',
      path: ['password'],
    },
  );
