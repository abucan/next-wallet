'use client';

import axios from 'axios';
import { EditAccountButton } from '@/app/(dashboard)/(routes)/accounts/_components/edit-account-button';
import { ActionDialog } from '@/components/action-dialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const AccountActions = ({ id }: { id: string }) => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);

  const { mutate: deleteAccount, isPending } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/accounts/${id}`);
    },
    onError: (error) => {
      setShowDialog(false);
      console.log(error);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Account deleted successfully.',
        variant: 'default',
      });
      setShowDialog(false);
      router.push('/');
      router.refresh();
    },
  });

  return (
    <>
      <ActionDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        onClick={() => deleteAccount()}
        isBtnDisabled={isPending}
        dialogTitle='Do you want to delete this account?'
        dialogDescription='This action cannot be undone. This will permanently delete
        your account.'
        dialogBtnText={isPending ? 'Deleting...' : 'Delete'}
      />
      <EditAccountButton mode='modal' asChild accountId={id}>
        <Button variant='outline'>
          <Pencil className='mr-2 h-4 w-4' />
          <span className='font-mono font-[500]'>Edit</span>
        </Button>
      </EditAccountButton>
      <Button
        variant='destructive'
        onClick={() => setShowDialog(!showDialog)}
        disabled={isPending}
      >
        <Trash className='h-4 w-4 mr-2' />
        <span className='font-mono font-[500]'>Delete</span>
      </Button>
    </>
  );
};
