'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { accountSchema } from '@/ts/form-schemas/form-schemas';
import { SubmitHandler, useForm } from 'react-hook-form';
import FormFieldInput from '@/components/FormInput';
import AccountInput from '@/components/AccountInput';
import ColorInput from '@/components/ColorInput';
import { Form } from '@/components/ui/form';
import { Button } from '@/components/ui/button';

type FormValues = z.infer<typeof accountSchema>;

interface AccountFormProps {
  submit: SubmitHandler<FormValues>;
  isEditing: boolean;
  initialValues?: FormValues;
  isLoadingSubmit?: boolean;
}

const RecordsForm = ({
  submit,
  isEditing,
  initialValues,
  isLoadingSubmit,
}: AccountFormProps) => {
  const form = useForm<FormValues>({
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
            <AccountInput
              name='type'
              label='Account type'
              placeholder='Select an account type'
              initialValue={initialValues?.type}
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
                : 'Create a record'}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RecordsForm;
