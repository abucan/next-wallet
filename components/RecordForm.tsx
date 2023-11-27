'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { recordSchema } from '@/ts/form-schemas/form-schemas';
import { useForm } from 'react-hook-form';
import FormFieldInput from '@/components/FormInput';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import AccountSelect from './AccountSelect';
import DataSelect from './DateSelect';
import {
  SelectOptionsProps,
  GenericFormProps,
} from '@/ts/interfaces/app_interfaces';
import { RecordFormValues } from '@/ts/types/app_types';
import CustomFormSelect from './CustomFormSelect';
// icons
import { Car, Home, TrendingDown, TrendingUp } from 'lucide-react';
import { FaHospital } from 'react-icons/fa';
import {
  categoryTypes,
  recordTypes,
} from '@/actions/get-category-type';

const RecordForm = ({
  submit,
  isEditing,
  initialValues,
  isLoadingSubmit,
}: GenericFormProps<RecordFormValues>) => {
  const form = useForm<RecordFormValues>({
    resolver: zodResolver(recordSchema),
    defaultValues: {
      ...initialValues,
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
          <div className='w-1/2 space-y-4 border px-6 py-8 rounded-lg bg-card text-card-foreground shadow-sm'>
            <div className='flex flex-row gap-x-3 items-center'>
              <AccountSelect
                name='accountId'
                label='Account'
                placeholder='Select an account'
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
              name='date'
              label='Record Date'
              placeholder='Pick a date'
            />
            <Button type='submit' disabled={isSubmitting}>
              {isEditing
                ? isLoadingSubmit
                  ? 'Editing...'
                  : 'Edit record'
                : isLoadingSubmit
                ? 'Creating...'
                : 'Create a record'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RecordForm;
