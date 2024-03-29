'use client';

import { InputProps } from '@/ts/interfaces/app_interfaces';
import { useFormContext } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { useState } from 'react';

export const DateSelect = ({
  name,
  label,
  placeholder,
  initialValue,
}: InputProps) => {
  const { control } = useFormContext();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex flex-col w-full'>
          <FormLabel className='input-label'>{label}</FormLabel>
          <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={'outline'}
                  className={cn(
                    'w-full pl-3 text-left font-normal input-placeholder',
                    !field.value && 'text-muted-foreground'
                  )}
                >
                  {field.value instanceof Date ? (
                    format(field.value, 'PPP')
                  ) : (
                    <span>
                      {initialValue
                        ? format(new Date(initialValue!), 'PPP')
                        : placeholder}
                    </span>
                  )}
                  <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0' align='start'>
              <Calendar
                mode='single'
                selected={field.value}
                onSelect={(e) => {
                  field.onChange(e);
                  setIsCalendarOpen(false);
                }}
                disabled={(date) =>
                  date > new Date() || date < new Date('1900-01-01')
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
