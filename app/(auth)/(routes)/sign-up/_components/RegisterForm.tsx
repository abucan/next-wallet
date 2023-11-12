'use client';

import * as z from 'zod';
import axios from 'axios';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/ts/form-schemas/form-schemas';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import FormFieldInput from '@/components/FormInput';

type FormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values: FormValues) => {
    const response = await axios.post('/api/user', values, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 201) {
      toast({
        title: 'Account created',
        description: 'Please sign in to your account.',
        variant: 'default',
      });
      router.refresh();
      router.push('/sign-in');
    } else {
      toast({
        title: 'Error',
        description: 'Oops. Something went wrong.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
        <FormFieldInput
          name='username'
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
          disabled={isSubmitting}
        >
          Sign In
        </Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
