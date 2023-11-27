'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { accountSchema } from '@/ts/form-schemas/form-schemas';
import { useForm } from 'react-hook-form';
import FormFieldInput from '@/components/FormInput';
import ColorInput from '@/components/ColorInput';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { GenericFormProps } from '@/ts/interfaces/app_interfaces';
import { AccountFormValues } from '@/ts/types/app_types';
import CustomFormSelect from './CustomFormSelect';
import { accountTypes } from '@/actions/get-account-type';

const AccountForm = ({
  submit,
  isEditing,
  initialValues,
  isLoadingSubmit,
}: GenericFormProps<AccountFormValues>) => {
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountSchema),
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
              name='balance'
              label='Account balance'
              placeholder='Enter the starting balance'
            />
            <Button type='submit' disabled={isSubmitting}>
              {isEditing
                ? isLoadingSubmit
                  ? 'Editing...'
                  : 'Edit account'
                : isLoadingSubmit
                ? 'Creating...'
                : 'Create an account'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default AccountForm;
