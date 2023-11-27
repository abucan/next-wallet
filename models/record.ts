import { CategoryType, RecordType } from '@prisma/client';

export interface Record {
  id?: string;
  accountId: string;
  recordType: RecordType;
  amount: number;
  category: CategoryType;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
}
