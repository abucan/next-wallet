import { useFormContext } from "react-hook-form";
import { AccountInputProps } from "@/ts/interfaces/app_interfaces";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getIconComponent } from "./AccountIcon";

interface Account {
  id: string;
  name: string;
  type: string;
  color: string;
  balance: number;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

const AccountSelect = ({
  name,
  label,
  placeholder,
  initialValue,
}: AccountInputProps) => {
  const { control } = useFormContext();
  const { data: account, isLoading } = useQuery<Account[]>({
    queryKey: ["userAccount"],
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

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={initialValue}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {!isLoading && userAccounts && userAccounts.map((item) => {
                    const AccountIcon = getIconComponent(item.type);
                    return (
                      <SelectItem key={item.id} value={item.id}>
                        <div className="flex flex-row items-center">
                          <span className="mr-1 p-1" style={{color: item.color}}>
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
