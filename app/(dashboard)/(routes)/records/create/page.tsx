'use client';

import axios from 'axios';
import RecordForm from '@/components/RecordForm';
import { Record } from '@/models/record';
import { RecordFormValues } from '@/ts/types/app_types';
import { useMutation } from '@tanstack/react-query';
import { toast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { SubmitHandler } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

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
      <div className='w-full ml-auto pb-6 flex flex-row items-center justify-between md:pr-12'>
        <h1 className='font-mono font-[500] text-2xl text-tertiary'>
          Add Record
        </h1>
        <Link href='/records'>
          <Button variant='destructive' className='font-sans'>
            <XCircle className='h-4 w-4 mr-2' /> Cancel
          </Button>
        </Link>
      </div>
      <RecordForm
        submit={handleCreateRecord}
        isEditing={false}
        isLoadingSubmit={isLoadingSubmit}
      />
    </>
  );
};

export default CreateRecordPage;
