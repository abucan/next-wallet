'use client';

import FormFieldInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Name is too short' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const RegisterForm = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const onSubmit = async (values: FormValues) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <FormFieldInput
          name='name'
          label='Username'
          placeholder='Enter your username'
        />
        <FormFieldInput
          name='email'
          label='Email'
          placeholder='Enter your email'
        />
        <FormFieldInput
          name='password'
          label='Password'
          placeholder='Enter your password'
        />
        <Button
          type='submit'
          className='w-full'
          disabled={!isValid || isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
