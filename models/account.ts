import { AccountType } from '@prisma/client';

export interface Account {
  id?: string;
  name: string;
  type: AccountType;
  color: string;
  balance: number;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
