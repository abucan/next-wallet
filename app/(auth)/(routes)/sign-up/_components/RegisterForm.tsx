'use client';

import FormFieldInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Name is too short' })
    .max(20, 'Username is too long'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid email address' }),
  password: z.string().min(1, 'Password is required').min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const RegisterForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const { isValid, isSubmitting } = form.formState;

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
        variant: 'default'
      });
      router.refresh();
      router.push('/sign-in');
    } else {
      toast({
        title: 'Error',
        description: 'Oops. Something went wrong.',
        variant: 'destructive'
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
