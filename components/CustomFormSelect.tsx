import { InputProps } from '@/ts/interfaces/app_interfaces';
import { GenericInputProps } from '@/ts/types/app_types';
import { useFormContext } from 'react-hook-form';
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

const CustomFormSelect = ({
  name,
  label,
  placeholder,
  initialValue,
  options,
}: InputProps & { options: GenericInputProps[] }) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='w-full'>
          <FormLabel className='input-label'>{label}</FormLabel>
          <FormControl>
            <Select
              onValueChange={field.onChange}
              defaultValue={initialValue}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className='max-h-[200px]'>
                <SelectGroup>
                  {options.map((item) => {
                    const { icon: CurrentIcon } = item;
                    return (
                      <SelectItem
                        key={item.value}
                        value={item.value}
                        className='hover:cursor-pointer'
                      >
                        <div className='flex flex-row items-center'>
                          <span className='mr-1 p-1'>
                            <CurrentIcon />
                          </span>
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

export default CustomFormSelect;
