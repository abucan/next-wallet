import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from './ui/button';

interface ActionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onClick: () => void;
  isBtnDisabled: boolean;
  dialogTitle: string;
  dialogDescription: string;
  dialogBtnText: string;
}

const ActionDialog = ({
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
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
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

export default ActionDialog;
