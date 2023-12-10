import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Account } from '@/models/account';
import { InputProps } from '@/ts/interfaces/app_interfaces';
import { useFormContext } from 'react-hook-form';
import { getAccountIcon } from '@/actions/get-account-type';
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

const AccountSelect = ({
  name,
  label,
  placeholder,
  initialValue,
}: InputProps) => {
  const { control } = useFormContext();
  const { data: account, isLoading } = useQuery<Account[]>({
    queryKey: ['userAccount'],
    queryFn: async () => {
      const response = await axios.get(`/api/accounts/`);
      return response.data;
    },
  });

  const userAccounts = account?.map((account) => {
    return {
      name: account.name,
      id: account.id,
      type: account.type,
      color: account.color,
    };
  });

  const currentRecordAccount = userAccounts?.find(
    (item) => item.id === initialValue,
  )?.id;

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
              defaultValue={currentRecordAccount || initialValue}
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {!isLoading &&
                    userAccounts &&
                    userAccounts.map((item) => {
                      const AccountIcon = getAccountIcon(item.type);
                      return (
                        <SelectItem
                          key={item.id}
                          value={item?.id!}
                          className='hover:cursor-pointer'
                        >
                          <div className='flex flex-row items-center'>
                            <span
                              className='mr-1 p-1'
                              style={{ color: item.color }}
                            >
                              <AccountIcon />
                            </span>
                            {item.name}
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

export default AccountSelect;
