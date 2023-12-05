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
import { format } from 'date-fns';
import Link from 'next/link';

export const columns: ColumnDef<Record>[] = [
  {
    accessorKey: 'category',
    header: 'Category',
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
    header: 'Record Type',
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
        <div
          className='flex flex-row items-center hover:cursor-pointer'
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          Amount
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </div>
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
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <div
          className='flex flex-row items-center hover:cursor-pointer'
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === 'asc')
          }
        >
          Date
          <ArrowUpDown className='ml-2 h-4 w-4' />
        </div>
      );
    },
    cell: ({ row }) => {
      return (
        <div className='font-[500] font-mono text-treitary'>
          {format(row.getValue('createdAt'), 'dd/MM/yyyy')}
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
            <DropdownMenuItem>Edit record</DropdownMenuItem>
            <DropdownMenuItem>Delete Record</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
