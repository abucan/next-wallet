'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Record } from '@/models/record';

export const columns: ColumnDef<Record>[] = [
  {
    accessorKey: 'amount',
    header: () => <div className='text-right'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount);

      return (
        <div className='text-right font-[500] font-mono text-treitary'>
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: 'category',
    header: () => <div className='text-right'>Category</div>,
    cell: ({ row }) => {
      const category = row.getValue('category');
      const formatted =
        category === 'HOUSE'
          ? 'House'
          : category === 'CAR'
          ? 'Car'
          : 'Hospital';

      return (
        <div className='text-right font-[500] font-mono text-treitary'>
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: 'recordType',
    header: () => <div className='text-right'>Record Type</div>,
    cell: ({ row }) => {
      const recordType = row.getValue('recordType');
      const formatted =
        recordType === 'EXPENSE' ? 'Expense' : 'Income';

      return (
        <div className='text-right font-[500] font-mono text-treitary'>
          {formatted}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const record = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(record.accountId)
              }
            >
              Edit Record
            </DropdownMenuItem>
            <DropdownMenuItem>Delete Record</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
