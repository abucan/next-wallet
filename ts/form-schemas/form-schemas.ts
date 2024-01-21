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
