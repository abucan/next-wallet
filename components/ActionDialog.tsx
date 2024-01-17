import { ActionDialogProps } from '@/ts/interfaces/app_interfaces';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export const ActionDialog = ({
  open,
  onOpenChange,
  onClick,
  isBtnDisabled,
  dialogTitle,
  dialogDescription,
  dialogBtnText,
}: ActionDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='font-mono font-[500]'>
            {dialogTitle}
          </DialogTitle>
          <DialogDescription className='font-mono'>
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type='submit'
            onClick={onClick}
            variant='destructive'
            disabled={isBtnDisabled}
          >
            {dialogBtnText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
