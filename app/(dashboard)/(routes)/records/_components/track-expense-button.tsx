'use client';

import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { RecordForm } from '@/app/(dashboard)/(routes)/records/_components/record-form';
import { Record } from '@/models/record';
import { RecordFormValues } from '@/ts/types/app_types';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler } from 'react-hook-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';

interface TrackExpenseButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
}

export const TrackExpenseButton = ({
  children,
  mode,
  asChild,
}: TrackExpenseButtonProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

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
      setOpen(false);
    },
  });

  const isLoadingSubmit = status === 'pending';

  const handleCreateRecord: SubmitHandler<RecordFormValues> = (
    values: RecordFormValues
  ) => {
    createPost(values);
  };

  if (mode === 'modal') {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild={asChild}>{children}</DialogTrigger>
        <DialogContent className='bg-transparent border-none w-full p-1 md:p-0'>
          <RecordForm
            submit={handleCreateRecord}
            isEditing={false}
            isLoadingSubmit={isLoadingSubmit}
          />
        </DialogContent>
      </Dialog>
    );
  }
};
