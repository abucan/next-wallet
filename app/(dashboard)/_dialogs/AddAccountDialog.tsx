import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  AccountProps,
  AddDialogAccountProps,
} from '@/ts/interfaces/app_interfaces';
import AddAccountForm from './AddAccountForm';

const AddDialogAccount = ({
  open,
  onOpenChange,
}: AddDialogAccountProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Account</DialogTitle>
          <DialogDescription>
            Add a new account to your accounts page
          </DialogDescription>
        </DialogHeader>
        <AddAccountForm  />
      </DialogContent>
    </Dialog>
  );
};

export default AddDialogAccount;
