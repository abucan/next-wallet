import { AccountOrderBy } from "@/ts/types/app_types";
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getOrderByClause (sorting: string): AccountOrderBy  {
  switch (sorting) {
    case 'az':
      return { name: 'asc' };
    case 'za':
      return { name: 'desc' };
    case 'newest':
      return { createdAt: 'desc' };
    case 'oldest':
      return { createdAt: 'asc' };
    case 'highest':
      return { balance: 'desc' };
    case 'lowest':
      return { balance: 'asc' };
    default:
      return {};
  }
};
