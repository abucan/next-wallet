import { InputProps } from '@/ts/interfaces/app_interfaces';
import { useFormContext } from 'react-hook-form';
import { Input } from './ui/input';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form';

const FormFieldInput = ({
  name,
  label = '',
  placeholder,
}: InputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={
                name === 'password'
                  ? 'password'
                  : 'text' && name === 'balance'
                  ? 'number'
                  : 'text'
              }
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldInput;
