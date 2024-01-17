'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { ArrowUpDown, Pencil, Trash } from 'lucide-react';
import { Record } from '@/models/record';
import { getCategoryIcon, getCategoryName } from '@/actions/get-category-type';
import { format } from 'date-fns';
import { formatCurrency } from '@/lib/utils';
import { TrackExpenseButton } from '@/app/(dashboard)/(routes)/records/_components/TrackExpenseButton';
import { EditExpenseButton } from '@/app/(dashboard)/(routes)/records/_components/EditExpenseButton';
import { RecordAction } from './RecordAction';

export const columns: ColumnDef<Record>[] = [
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ row }) => {
      const formatted = getCategoryName(row.getValue('category'));
      const Icon = getCategoryIcon(row.getValue('category'));

      return (
        <div className='font-[500] font-mono text-tertiary flex flex-row items-center'>
          <span className='mr-2 text-base'>
            <Icon />
          </span>
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: 'recordType',
    header: 'Record Type',
    cell: ({ row }) => {
      const recordType = row.getValue('recordType');
      const formatted = recordType === 'EXPENSE' ? 'Expense' : 'Income';

      return (
        <div className='font-[500] font-mono text-tertiary'>{formatted}</div>
      );
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <div
          className='flex flex-row items-center hover:cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Amount
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = formatCurrency(amount);

      return (
        <div className='font-[500] font-mono text-tertiary'>{formatted}</div>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <div
          className='flex flex-row items-center hover:cursor-pointer'
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='font-[500] font-mono text-tertiary'>
          {format(row.getValue('createdAt'), 'dd/MM/yyyy')}
        </div>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return <RecordAction id={row.original.id} />;
    },
  },
];
