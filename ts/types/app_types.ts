import * as z from 'zod';
import {
  accountSchema,
  recordSchema,
} from '../form-schemas/form-schemas';

export type AccountFormValues = z.infer<typeof accountSchema>;
export type RecordFormValues = z.infer<typeof recordSchema>;

export type SortOrder = 'asc' | 'desc';

export type AccountOrderBy = {
  name?: SortOrder;
  createdAt?: SortOrder;
  balance?: SortOrder;
};

export type GenericInputProps = {
  value: string;
  label: string;
  icon: React.ReactNode;
};
