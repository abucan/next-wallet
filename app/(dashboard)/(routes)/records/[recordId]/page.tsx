'use client';

import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Loader } from 'lucide-react';
import { SubmitHandler } from 'react-hook-form';
import { RecordFormValues } from '@/ts/types/app_types';
import RecordForm from '@/components/RecordForm';
import { Record } from '@/models/record';

const RecordIdPage = ({
  params,
}: {
  params: { recordId: string };
}) => {
  const router = useRouter();
  console.log("here", params.recordId);

  const { data: account, isLoading } = useQuery({
    queryKey: ['record', params.recordId],
    queryFn: async () => {
      const response = await axios.get(
        `/api/records/${params.recordId}`,
      );
      return response.data;
    },
  });

  const { mutate: editAccount, status } = useMutation({
    mutationFn: (account: Record) => {
      return axios.patch(`/api/accounts/${params.recordId}`, account);
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
      router.push('/records');
      router.refresh();
    },
  });

  const isLoadingSubmit = status === 'pending';

  const handleEditAccount: SubmitHandler<RecordFormValues> = (
    values: RecordFormValues,
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
    <RecordForm
      submit={handleEditAccount}
      isEditing={true}
      isLoadingSubmit={isLoadingSubmit}
      initialValues={account}
    />
  );
};

export default RecordIdPage;
