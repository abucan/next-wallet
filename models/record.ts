export interface Record {
  id?: string;
  accountId: string;
  recordType: string;
  amount: number;
  category: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId?: string;
}
