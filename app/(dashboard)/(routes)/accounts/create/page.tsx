'use client';

import axios from 'axios';
import AccountForm from '@/components/AccountForm';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from '@/components/ui/use-toast';
import { AccountProps } from '@/ts/interfaces/app_interfaces';
import { SubmitHandler } from 'react-hook-form';
import { FormValues } from '@/ts/types/app_types';

const CreateAccountPage = () => {
  const router = useRouter();

  const { mutate: createPost, status } = useMutation({
    mutationFn: (account: AccountProps) => {
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

  const handleCreateAccount: SubmitHandler<FormValues> = (
    values: FormValues,
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
