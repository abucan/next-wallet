import { useFormContext } from 'react-hook-form';
import { AccountInputProps } from '@/ts/interfaces/app_interfaces';
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
import { Car, Home } from 'lucide-react';
import { FaHospital } from 'react-icons/fa';

type CategoryTypesProps =  {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const categoryTypes: CategoryTypesProps[] = [
  { value: 'house', label: 'House Bills', icon: <Home /> },
  { value: 'car', label: 'Car Expenses', icon: <Car /> },
  {
    value: 'hospital',
    label: 'Hospital Bills',
    icon: <FaHospital />,
  },
];

const CategorySelect = ({
  name,
  label,
  placeholder,
  initialValue,
}: AccountInputProps) => {
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
              <SelectContent>
                <SelectGroup>
                  {categoryTypes.map((item) => {
                    return (
                      <SelectItem key={item.value} value={item.value}>
                        <div className='flex flex-row items-center'>
                          <span className='mr-1 p-1'>
                            {item.icon}
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

export default CategorySelect;
