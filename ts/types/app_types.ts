import * as z from 'zod';
import { accountSchema } from '../form-schemas/form-schemas';

export type GetAccounts = {
  name: string;
  color: string;
  type: string;
  balance: number;
};

export type FormValues = z.infer<typeof accountSchema>;

export type SortOrder = 'asc' | 'desc';

export type AccountOrderBy = {
  name?: SortOrder;
  createdAt?: SortOrder;
  balance?: SortOrder;
};