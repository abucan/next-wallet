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

  const { data: record, isLoading } = useQuery<Record>({
    queryKey: ['record', params.recordId],
    queryFn: async () => {
      const response = await axios.get(
        `/api/records/${params.recordId}`,
      );

      return response.data;
    },
  });

  const { mutate: editAccount, status } = useMutation({
    mutationFn: (record: Record) => {
      console.log(record);
      return axios.patch(`/api/records/${params.recordId}`, record);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Record updated successfully.',
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
      initialValues={record}
      id={record?.id}
    />
  );
};

export default RecordIdPage;
