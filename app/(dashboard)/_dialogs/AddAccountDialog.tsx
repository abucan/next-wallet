import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import AddAccountForm from "./AddAccountForm";

interface AddDialogAccountProps {
  children: React.ReactNode;
}

const AddDialogAccount = ({ children }: AddDialogAccountProps) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Account</DialogTitle>
          <DialogDescription>
            Add a new account to your accounts page
          </DialogDescription>
        </DialogHeader>
        {/* form */}
        <AddAccountForm />
        {/* form end */}
      </DialogContent>
    </Dialog>
  );
};

export default AddDialogAccount;
