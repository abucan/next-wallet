'use client';

import axios from 'axios';
import { toast } from '@/components/ui/use-toast';
import { RecordForm } from '@/components/RecordForm';
import { Record } from '@/models/record';
import { RecordFormValues } from '@/ts/types/app_types';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import { SubmitHandler } from 'react-hook-form';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import { Loader } from 'lucide-react';

interface EditExpenseButtonProps {
  children: React.ReactNode;
  mode?: 'modal' | 'redirect';
  asChild?: boolean;
  recordId: string | undefined;
}

export const EditExpenseButton = ({
  children,
  mode,
  asChild,
  recordId,
}: EditExpenseButtonProps) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const { data: record, isLoading } = useQuery<Record>({
    queryKey: ['record', recordId],
    queryFn: async () => {
      const response = await axios.get(`/api/records/${recordId}`);

      return response.data;
    },
  });

  const { mutate: editAccount, status } = useMutation({
    mutationFn: (record: Record) => {
      console.log(record);
      return axios.patch(`/api/records/${recordId}`, record);
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
    values: RecordFormValues
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
            <RecordForm
              submit={handleEditAccount}
              isEditing={true}
              isLoadingSubmit={isLoadingSubmit}
              initialValues={record}
              id={record?.id}
            />
          )}
        </DialogContent>
      </Dialog>
    );
  }
};
