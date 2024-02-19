'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { recordSchema } from '@/ts/form-schemas/form-schemas';
import { useForm } from 'react-hook-form';
import { FormFieldInput } from '@/components/form-input';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { AccountSelect } from '@/components/account-select';
import { DateSelect } from '@/components/date-select';
import { GenericFormProps } from '@/ts/interfaces/app_interfaces';
import { RecordFormValues } from '@/ts/types/app_types';
import { CustomFormSelect } from '@/components/custom-form-select';
import { categoryTypes, recordTypes } from '@/actions/get-category-type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from '../../../../../components/ui/use-toast';
import { ActionDialog } from '@/components/action-dialog';

export const RecordForm = ({
  submit,
  isEditing,
  initialValues,
  isLoadingSubmit,
  id,
}: GenericFormProps<RecordFormValues>) => {
  const form = useForm<RecordFormValues>({
    resolver: zodResolver(recordSchema),
    defaultValues: {
      ...initialValues,
      amount: initialValues?.amount && initialValues.amount / 100,
    },
  });

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
      router.refresh();
    },
  });

  const { isDirty, isValid } = form.formState;

  return (
    <>
      <ActionDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        onClick={() => deleteRecord()}
        isBtnDisabled={isPending}
        dialogTitle='Do you want to delete this record?'
        dialogDescription='This action cannot be undone. This will permanently delete
    your record.'
        dialogBtnText={isPending ? 'Deleting...' : 'Delete'}
      />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className='w-full flex flex-col items-center justify-center'
        >
          <div className='w-full space-y-4 border px-6 py-8 rounded-lg bg-card text-card-foreground shadow-sm'>
            <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-x-3 items-center'>
              <AccountSelect
                name='accountId'
                label='Account'
                placeholder='Select an account'
                initialValue={initialValues?.accountId}
              />
              <CustomFormSelect
                name='recordType'
                label='Record Type'
                placeholder='Select a record type'
                initialValue={initialValues?.recordType}
                options={recordTypes}
              />
            </div>
            <div className='flex flex-col space-y-4 md:space-y-0 md:flex-row md:gap-x-3 items-center'>
              <FormFieldInput
                name='amount'
                label='Amount'
                placeholder='Enter the amount'
              />
              <FormFieldInput
                name='currency'
                label='Currency'
                placeholder='EUR'
                disabled={true}
              />
            </div>
            <CustomFormSelect
              name='category'
              label='Category'
              placeholder='Select an category'
              initialValue={initialValues?.category}
              options={categoryTypes}
            />
            <DateSelect
              name='createdAt'
              label='Record Date'
              placeholder='Pick a date'
              initialValue={initialValues?.createdAt}
            />
            <div
              className={
                isEditing ? 'w-full flex flex-row space-x-4' : 'w-full'
              }
            >
              <Button
                type='submit'
                disabled={isLoadingSubmit || !isDirty || !isValid}
                className='w-full'
              >
                {isEditing
                  ? isLoadingSubmit
                    ? 'Editing...'
                    : 'Edit record'
                  : isLoadingSubmit
                  ? 'Adding...'
                  : 'Add record'}
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};
