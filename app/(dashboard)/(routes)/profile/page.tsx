'use client';
import * as z from 'zod';
import { useCurrentUser } from '@/hooks/use-current-user';
import { useSession } from 'next-auth/react';
import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SettingsSchema } from '@/ts/form-schemas/form-schemas';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { FormFieldInput } from '@/components/form-input';
import { Switch } from '@/components/ui/switch';
import { settings } from '@/actions/settings';

const UserPage = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const { update } = useSession();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      name: user?.name || undefined,
      email: user?.email || undefined,
      password: undefined,
      newPassword: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values).then((data) => {
        if (data.error) {
          setError(data.error);
        }
        if (data.success) {
          setSuccess(data.success);
          update();
        }
      });
    });
  };

  return (
    <div className='space-y-8 w-1/2'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>
        Your Profile
      </h1>
      <Form {...form}>
        <form
          className='w-full flex flex-col items-center justify-center'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='w-full space-y-4 border px-6 py-8 rounded-lg bg-card text-card-foreground shadow-sm'>
            <FormFieldInput
              name='name'
              label='Name'
              placeholder='John Doe'
            />
            {user?.isOAuth === false && (
              <>
                <FormFieldInput
                  name='email'
                  label='Email'
                  placeholder='john@gmail.com'
                />
                <FormFieldInput
                  name='password'
                  label='Password'
                  placeholder='******'
                />
                <FormFieldInput
                  name='newPassword'
                  label='New Password'
                  placeholder='******'
                />
              </>
            )}
            {user?.isOAuth === true && (
              <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm'>
                <div className='space-y-0.5'>
                  <FormLabel>
                    Account Linked with Third Party
                  </FormLabel>
                  <FormDescription>
                    Your account is currently linked with a
                    third-party authentication provider.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    disabled={isPending}
                    checked={user.isOAuth}
                  />
                </FormControl>
              </FormItem>
            )}
            <FormError message={error} />
            <FormSuccess message={success} />
            <Button
              type='submit'
              className='w-1/4'
              disabled={isPending}
            >
              Save
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UserPage;
