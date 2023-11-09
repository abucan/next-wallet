import { useFormContext } from 'react-hook-form';
import { FormFieldSelectInputProps } from '@/ts/interfaces/app_interfaces';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from './ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface AccountColorsProps {
  value: string;
  label: string;
}

const accountColors: AccountColorsProps[] = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
  { value: 'yellow', label: 'Yellow' },
];

const FormFieldColorSelectInput = ({
  name,
  label,
  placeholder,
}: FormFieldSelectInputProps) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange}>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {accountColors.map((item) => {
                    return (
                      <SelectItem key={item.value} value={item.value}>
                        <div className='flex flex-row items-center'>
                          <div
                            style={{
                              backgroundColor: `${item.value}`,
                            }}
                            className='w-5 h-5 rounded-full mr-2 p-1 opacity-70'
                          ></div>
                          {item.label}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFieldColorSelectInput;
