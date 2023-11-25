import { InputProps } from '@/ts/interfaces/app_interfaces';
import { useFormContext } from 'react-hook-form';
import { accountColors } from '@/lib/colors';
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

const ColorInput = ({
  name,
  label,
  placeholder,
  initialValue,
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
            <Select
              onValueChange={field.onChange}
              defaultValue={initialValue}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className='max-h-[200px]'>
                <SelectGroup>
                  {accountColors.map((item) => {
                    return (
                      <SelectItem key={item.value} value={item.value}>
                        <div className='flex flex-row items-center capitalize'>
                          <div
                            style={{
                              backgroundColor: `${item.value}`,
                            }}
                            className='w-5 h-5 rounded-full mr-2 p-1 opacity-70'
                          ></div>
                          {item.value}
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

export default ColorInput;
