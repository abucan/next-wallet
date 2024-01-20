'use client';

import ActionDialog from '@/components/ActionDialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Pencil, Trash } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Actions = ({ id }: { id: string }) => {
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
      <Link href={`/accounts/${id}`}>
        <Button variant='outline'>
          <Pencil className='h-4 w-4 mr-2' />
          <span className='font-mono font-500]'>Edit</span>
        </Button>
      </Link>
      <Button
        variant='destructive'
        onClick={() => setShowDialog(!showDialog)}
        disabled={isPending}
      >
        <Trash className='h-4 w-4 mr-2' />
        <span className='font-mono font-500]'>Delete</span>
      </Button>
    </>
  );
};

export default Actions;
