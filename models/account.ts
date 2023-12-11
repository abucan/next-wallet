import { AccountType } from '@prisma/client';

export interface Account {
  id?: string;
  name: string;
  type: AccountType;
  color: string;
  startedBalance: number;
  currentBalance?: number;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
