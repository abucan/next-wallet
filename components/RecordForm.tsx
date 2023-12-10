'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { recordSchema } from '@/ts/form-schemas/form-schemas';
import { useForm } from 'react-hook-form';
import FormFieldInput from '@/components/FormInput';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import AccountSelect from './AccountSelect';
import DataSelect from './DateSelect';
import { GenericFormProps } from '@/ts/interfaces/app_interfaces';
import { RecordFormValues } from '@/ts/types/app_types';
import CustomFormSelect from './CustomFormSelect';
import {
  categoryTypes,
  recordTypes,
} from '@/actions/get-category-type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { toast } from './ui/use-toast';
import ActionDialog from './ActionDialog';

const RecordForm = ({
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
      router.push('/records');
      router.refresh();
    },
  });

  const { isSubmitting } = form.formState;

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
          <div className='w-1/2 space-y-4 border px-6 py-8 rounded-lg bg-card text-card-foreground shadow-sm'>
            <div className='flex flex-row gap-x-3 items-center'>
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
            <div className='flex flex-row gap-x-3 items-center'>
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
            <DataSelect
              name='createdAt'
              label='Record Date'
              placeholder='Pick a date'
              initialValue={initialValues?.createdAt}
            />
            <div
              className={
                isEditing ? 'w-full flex flex-row space-x-4' : 'w-1/4'
              }
            >
              <Button
                type='submit'
                disabled={isSubmitting}
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
              {isEditing && (
                <Button
                  className='w-full'
                  variant='destructive'
                  type='button'
                  onClick={() => setShowDialog(!showDialog)}
                >
                  Delete
                </Button>
              )}
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RecordForm;
