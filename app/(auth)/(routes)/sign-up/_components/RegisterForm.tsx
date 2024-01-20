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
import { FormFieldInput } from '@/components/FormInput';
import { useState, useTransition } from 'react';
import { register } from '@/actions/register';

type FormValues = z.infer<typeof registerSchema>;

export const RegisterForm = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const { isSubmitting } = form.formState;

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    setError('');
    setSuccess('');
    console.log(data);
    startTransition(() => {
      register(data).then((data) => {
        setError(data.error);
        setSuccess(data.success);
        toast({
          title: 'Success',
          description: 'Welcome to your dashboard.',
          variant: 'default',
        });
      });
    });
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
