'use client';

import FormFieldInput from '@/components/FormInput';
import FormFieldColorSelectInput from '@/components/SelectColorInput';
import SelectInput from '@/components/SelectInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Select } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const accountColors = ['red', 'green', 'blue', 'yellow'];
const accountTypes = ['general', 'cash', 'credit_card'];

const formSchema = z.object({
  name: z.string().min(3, {
    message: 'Account name must be at least 3 characters long',
  }),
  color: z.string().refine((value) => accountColors.includes(value), {
    message: 'Invalid account color',
  }),
  type: z.string().refine((value) => accountTypes.includes(value), {
    message: 'Invalid account type',
  }),
  balance: z.number().min(1, {
    message: 'Must enter a number',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const AddAccountForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      color: '',
      type: '',
      balance: 0,
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const onSubmit = async (values: FormValues) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='mt-4 flex flex-col items-start space-y-4'
      >
        <div className='flex flex-row gap-x-3 items-center w-full'>
          <FormFieldInput
            name='name'
            label='Account name'
            placeholder='Enter your account name'
          />
          <FormFieldColorSelectInput
            name='color'
            label='Color'
            placeholder='Pick your account color'
          />
        </div>
        <SelectInput
          name='type'
          label='Account type'
          placeholder='Pick your account type'
        />

        <FormFieldInput
          name='balance'
          label='Account balance'
          placeholder='Enter your starting balance'
        />
        <Button
          type='submit'
          className='w-full'
          disabled={isSubmitting}
        >
          Create an account
        </Button>
      </form>
    </Form>
  );
};

export default AddAccountForm;
