'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { accountSchema } from '@/ts/form-schemas/form-schemas';
import { useForm } from 'react-hook-form';
import { FormFieldInput } from '@/components/form-input';
import { ColorInput } from '@/components/color-input';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { GenericFormProps } from '@/ts/interfaces/app_interfaces';
import { AccountFormValues } from '@/ts/types/app_types';
import { CustomFormSelect } from '@/components/custom-form-select';
import { accountTypes } from '@/actions/get-account-type';

export const AccountForm = ({
  submit,
  isEditing,
  initialValues,
  isLoadingSubmit,
}: GenericFormProps<AccountFormValues>) => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      ...initialValues,
      startedBalance:
        initialValues?.startedBalance && initialValues.startedBalance / 100,
    },
    mode: 'onSubmit',
  });

  const { isSubmitting, isValid, isDirty } = form.formState;

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className='w-full flex flex-col items-center justify-center'
        >
          <div className='w-full space-y-4 border px-6 py-8 rounded-lg bg-card text-card-foreground shadow-sm'>
            <div className='flex flex-row gap-x-3 items-center'>
              <FormFieldInput
                name='name'
                label='Account name'
                placeholder='Enter the account name'
              />
              <ColorInput
                name='color'
                label='Color'
                placeholder='Select an account color'
                initialValue={initialValues?.color}
              />
            </div>
            <CustomFormSelect
              name='type'
              label='Account'
              placeholder='Select an account'
              initialValue={initialValues?.type}
              options={accountTypes}
            />
            <FormFieldInput
              name='startedBalance'
              label='Account balance'
              placeholder='Enter the starting balance'
            />
            <Button
              type='submit'
              disabled={!isDirty || !isValid || isLoadingSubmit}
              className='w-full'
            >
              {isEditing
                ? isLoadingSubmit
                  ? 'Editing...'
                  : 'Edit account'
                : isLoadingSubmit
                ? 'Adding...'
                : 'Add account'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};
