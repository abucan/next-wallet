import * as z from 'zod';
import { accountSchema } from '../form-schemas/form-schemas';

export type GetAccounts = {
  name: string;
  color: string;
  type: string;
  balance: number;
};

export type FormValues = z.infer<typeof accountSchema>;
