'use client';

import FormFieldInput from '@/components/FormInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters long',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const LoginForm = () => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { isValid, isSubmitting } = form.formState;

  const onSubmit = async (values: FormValues) => {
    const signInData = await signIn('credentials', {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      toast({
        title: 'Error',
        description: 'Oops. Email or password do not match.',
        variant: 'destructive'
      });
    } else {
      toast({
        title: 'Success',
        description: 'Welcome to your dashboard.',
        variant: 'success'
      });
      router.refresh()
      router.push('/');
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='space-y-4'
      >
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

export default LoginForm;
