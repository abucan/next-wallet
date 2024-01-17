'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { recordSchema } from '@/ts/form-schemas/form-schemas';
import { useForm } from 'react-hook-form';
import { FormFieldInput } from '@/components/FormInput';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { AccountSelect } from './AccountSelect';
import { DateSelect } from './DateSelect';
import { GenericFormProps } from '@/ts/interfaces/app_interfaces';
import { RecordFormValues } from '@/ts/types/app_types';
import { CustomFormSelect } from './CustomFormSelect';
import { categoryTypes, recordTypes } from '@/actions/get-category-type';

export const RecordForm = ({
  submit,
  isEditing,
  initialValues,
  isLoadingSubmit,
}: GenericFormProps<RecordFormValues>) => {
  const form = useForm<RecordFormValues>({
    resolver: zodResolver(recordSchema),
    defaultValues: {
      ...initialValues,
      amount: initialValues?.amount && initialValues.amount / 100,
    },
  });

  const { isSubmitting } = form.formState;

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className='w-full flex flex-col items-center justify-center'
        >
          <div className='w-full space-y-4 border px-6 py-8 rounded-lg bg-card text-card-foreground shadow-sm'>
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
                size='sm'
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
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};
