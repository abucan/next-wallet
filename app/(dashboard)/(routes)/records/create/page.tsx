'use client';

import axios from 'axios';
import RecordForm from '@/components/RecordForm';
import { Record } from '@/models/record';
import { RecordFormValues } from '@/ts/types/app_types';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';

const CreateRecordPage = () => {
  const router = useRouter();

  const { mutate: createPost, status } = useMutation({
    mutationFn: (record: Record) => {
      return axios.post('/api/records', record);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description:
          'Record created successfully.\nAccount updated successfully.',
        variant: 'default',
      });
      router.push('/records');
      router.refresh();
    },
  });

  const isLoadingSubmit = status === 'pending';

  const handleCreateRecord: SubmitHandler<RecordFormValues> = (
    values: RecordFormValues,
  ) => {
    createPost(values);
  };

  return (
    <>
      <RecordForm
        submit={handleCreateRecord}
        isEditing={false}
        isLoadingSubmit={isLoadingSubmit}
      />
    </>
  );
};

export default CreateRecordPage;
