import { EditExpenseButton } from '@/app/(dashboard)/(routes)/records/_components/EditExpenseButton';
import { ActionDialog } from '@/components/ActionDialog';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Pencil, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface RecordActionProps {
  id: string | undefined;
}

export const RecordActions = ({ id }: RecordActionProps) => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);

  const { mutate: deleteRecord, isPending } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/records/${id}`);
    },
    onError: (error) => {
      setShowDialog(false);
      console.log(error);
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Record deleted successfully.',
        variant: 'default',
      });
      setShowDialog(false);
      router.push('/records');
      router.refresh();
    },
  });

  return (
    <>
      <ActionDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        onClick={() => deleteRecord()}
        isBtnDisabled={isPending}
        dialogTitle='Do you want to delete this record?'
        dialogDescription='This action cannot be undone. This will permanently delete
        the record.'
        dialogBtnText={isPending ? 'Deleting...' : 'Delete'}
      />
      <div className='space-x-2 text-right'>
        <EditExpenseButton mode='modal' asChild recordId={id}>
          <Button size='sm' variant='outline' className='place-items-center'>
            <Pencil className='h-4 w-4 cursor-pointer' />
          </Button>
        </EditExpenseButton>
        <Button
          size='sm'
          variant='outline'
          className='place-items-center'
          onClick={() => setShowDialog(!showDialog)}
          disabled={isPending}
        >
          <Trash className='h-4 w-4 cursor-pointer' />
        </Button>
      </div>
    </>
  );
};
