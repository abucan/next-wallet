'use client';

import axios from 'axios';
import { Account } from '@/models/account';
import AccountForm from '@/components/AccountForm';
import { toast } from '@/components/ui/use-toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';
import { SubmitHandler } from 'react-hook-form';
import { AccountFormValues } from '@/ts/types/app_types';

const AccountIdPage = ({
  params,
}: {
  params: { accountId: string };
}) => {
  const router = useRouter();

  const { data: account, isLoading } = useQuery({
    queryKey: ['account', params.accountId],
    queryFn: async () => {
      const response = await axios.get(
        `/api/accounts/${params.accountId}`,
      );
      return response.data;
    },
  });

  const { mutate: editAccount, status } = useMutation({
    mutationFn: (account: Account) => {
      return axios.patch(
        `/api/accounts/${params.accountId}`,
        account,
      );
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
    },
  });

  const isLoadingSubmit = status === 'pending';

  const handleEditAccount: SubmitHandler<AccountFormValues> = (
    values: AccountFormValues,
  ) => {
    editAccount(values);
  };

  if (isLoading) {
    return (
      <div className='w-full grid place-items-center animate-spin'>
        <Loader />
      </div>
    );
  }

  return (
    <AccountForm
      submit={handleEditAccount}
      isEditing={true}
      isLoadingSubmit={isLoadingSubmit}
      initialValues={account}
    />
  );
};

export default AccountIdPage;
