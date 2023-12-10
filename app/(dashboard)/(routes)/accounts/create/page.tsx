'use client';

import axios from 'axios';
import AccountForm from '@/components/AccountForm';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { SubmitHandler } from 'react-hook-form';
import { AccountFormValues } from '@/ts/types/app_types';
import { Account } from '@/models/account';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

const CreateAccountPage = () => {
  const router = useRouter();

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
    },
  });

  const isLoadingSubmit = status === 'pending';

  const handleCreateAccount: SubmitHandler<AccountFormValues> = (
    values: AccountFormValues,
  ) => {
    createPost(values);
  };

  return (
    <>
      <div className='w-full ml-auto pb-6 flex flex-row items-center justify-between md:pr-0'>
        <h1 className='font-mono font-[500] text-2xl text-tertiary'>
          Add Account
        </h1>
        <Link href='/accounts'>
          <Button variant='destructive' className='font-sans'>
            <XCircle className='h-4 w-4 mr-2' /> Cancel
          </Button>
        </Link>
      </div>
      <AccountForm
        submit={handleCreateAccount}
        isEditing={false}
        isLoadingSubmit={isLoadingSubmit}
      />
    </>
  );
};

export default CreateAccountPage;
