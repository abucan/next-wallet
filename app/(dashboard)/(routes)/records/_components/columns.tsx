'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Record } from '@/models/record';
import {
  getCategoryIcon,
  getCategoryName,
} from '@/actions/get-category-type';

export const columns: ColumnDef<Record>[] = [
  {
    accessorKey: 'category',
    header: () => <div className=''>Category</div>,
    cell: ({ row }) => {
      const formatted = getCategoryName(row.getValue('category'));
      const Icon = getCategoryIcon(row.getValue('category'));

      return (
        <div className='font-[500] font-mono text-treitary flex flex-row items-center'>
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
    header: () => <div className=''>Record Type</div>,
    cell: ({ row }) => {
      const recordType = row.getValue('recordType');
      const formatted =
        recordType === 'EXPENSE' ? 'Expense' : 'Income';

      return (
        <div className='font-[500] font-mono text-treitary'>
          {formatted}
        </div>
      );
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          variant='ghost'
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          Amount <ArrowUpDown className='ml-2 h-4 w-4' />
        </Button>
      );
    },
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
      }).format(amount);

      return (
        <div className='font-[500] font-mono text-treitary'>
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
