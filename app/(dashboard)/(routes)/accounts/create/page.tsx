'use client';

import axios from 'axios';
import AccountForm from '@/components/AccountForm';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { SubmitHandler } from 'react-hook-form';
import { AccountFormValues } from '@/ts/types/app_types';
import { Account } from '@/models/account';

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
    <AccountForm
      submit={handleCreateAccount}
      isEditing={false}
      isLoadingSubmit={isLoadingSubmit}
    />
  );
};

export default CreateAccountPage;
