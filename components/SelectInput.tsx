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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Coins, CreditCard, Wallet } from 'lucide-react';

type FormFieldSelectInputProps = {
  name: string;
  label?: string;
  placeholder: string;
};

interface AccountTypesProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const accountTypes: AccountTypesProps[] = [
  { value: 'general', label: 'General Account', icon: <Wallet /> },
  { value: 'cash', label: 'Cash Account', icon: <Coins /> },
  {
    value: 'credit_card',
    label: 'Credit Card',
    icon: <CreditCard />,
  },
];

const FormFieldSelectInput = ({
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
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {accountTypes.map((item) => {
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

export default FormFieldSelectInput;
