'use client';

import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { AccountForm } from '@/components/AccountForm';
import { Account } from '@prisma/client';
import { AccountFormValues } from '@/ts/types/app_types';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler } from 'react-hook-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

interface AddAccountButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export const AddAccountButton = ({
  children,
  mode,
  asChild,
}: AddAccountButtonProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { mutate: createPost, status } = useMutation({
    mutationFn: (account: Account) => {
      return axios.post('/api/accounts', account);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Account created successfully.',
        variant: 'default',
      });
      router.push('/accounts');
      router.refresh();
      setOpen(false);
    },
  });

  const isLoadingSubmit = status === 'pending';

  // TODO
  const handleCreateAccount: SubmitHandler<AccountFormValues> = (
    values: any
  ) => {
    createPost(values);
  };

  if (mode === 'modal') {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className='p-0 w-auto bg-transparent border-none'>
          <AccountForm
            submit={handleCreateAccount}
            isEditing={false}
            isLoadingSubmit={isLoadingSubmit}
          />
        </DialogContent>
      </Dialog>
    );
  }
};
