import { useFormContext } from "react-hook-form";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";

type FormFieldInputProps = {
  name: string;
  label?: string;
  placeholder: string;
};

const FormFieldInput = ({ name, label, placeholder }: FormFieldInputProps) => {
  const { control } = useFormContext();
  return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                type={
                  name === "password"
                    ? "password"
                    : "text" && name === "balance"
                    ? "number"
                    : "text"
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
