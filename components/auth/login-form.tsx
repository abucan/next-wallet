'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { login } from '@/actions/login';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useTransition } from 'react';
import { LoginSchema } from '@/ts/form-schemas/form-schemas';
import { useSearchParams } from 'next/navigation';
import {
  Form,
  FormControl,
  FormLabel,
  FormItem,
  FormMessage,
  FormField,
} from '../ui/form';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FormError } from '../form-error';
import { FormSuccess } from '../form-success';

export const LoginForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Email already in use with different provider!'
      : '';

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(data, callbackUrl)
        .then((data) => {
          if (data?.error) {
            form.reset();
            setError(data.error);
          }

          if (data?.success) {
            form.reset();
            setSuccess(data.success);
          }
        })
        .catch(() => setError('Something went wrong, please try again later.'));
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-4'>
          <>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='johndoe@example.com'
                      type='email'
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder='******'
                      type='password'
                      disabled={isPending}
                    />
                  </FormControl>
                  {/* <Button
                    size='sm'
                    variant='link'
                    asChild
                    className='px-0 font-normal'
                  >
                    <Link href='/auth/reset'>Forgot password?</Link>
                  </Button> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        </div>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        <Button type='submit' className='w-full' disabled={isPending}>
          Login
        </Button>
      </form>
    </Form>
  );
};
