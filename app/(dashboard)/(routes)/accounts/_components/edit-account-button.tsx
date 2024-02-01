'use client';

import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { AccountForm } from '@/app/(dashboard)/(routes)/accounts/_components/account-form';
import { Account } from '@prisma/client';
import { AccountFormValues } from '@/ts/types/app_types';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SubmitHandler } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Loader } from 'lucide-react';

interface EditAccountButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
  accountId?: string;
}

export const EditAccountButton = ({
  children,
  mode,
  asChild,
  accountId,
}: EditAccountButtonProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { data: account, isLoading } = useQuery({
    queryKey: ['account', accountId],
    queryFn: async () => {
      const response = await axios.get(`/api/accounts/${accountId}`);
      return response.data;
    },
  });

  const { mutate: editAccount, status } = useMutation({
    mutationFn: (account: Account) => {
      return axios.patch(`/api/accounts/${accountId}`, account);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Account updated successfully.',
        variant: 'default',
      });
      router.push('/accounts');
      router.refresh();
      setOpen(false);
    },
  });

  const isLoadingSubmit = status === 'pending';

  const handleEditAccount: SubmitHandler<AccountFormValues> = (
    values: any,
  ) => {
    editAccount(values);
  };

  if (mode === 'modal') {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className='p-0 w-auto bg-transparent border-none'>
          {isLoading ? (
            <div className='w-full grid place-items-center animate-spin'>
              <Loader />
            </div>
          ) : (
            <AccountForm
              submit={handleEditAccount}
              isEditing={true}
              isLoadingSubmit={isLoadingSubmit}
              initialValues={account}
            />
          )}
        </DialogContent>
      </Dialog>
    );
  }
};
