export interface Account {
  id?: string;
  name: string;
  type: string;
  color: string;
  balance: number;
  userId?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
