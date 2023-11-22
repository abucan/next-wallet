import { useFormContext } from "react-hook-form";
import { ColorInputProps } from "@/ts/interfaces/app_interfaces";
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

type RecordTypeProps = {
  value: string;
  label: string;
}

const recordType: RecordTypeProps[] = [
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];

const RecordTypeSelect = ({
  name,
  label,
  placeholder,
  initialValue,
}: ColorInputProps) => {
  const { control } = useFormContext();
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
                  {recordType.map((item) => {
                    return (
                      <SelectItem key={item.value} value={item.value}>
                        <div className="flex flex-row items-center capitalize">
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

export default RecordTypeSelect;
