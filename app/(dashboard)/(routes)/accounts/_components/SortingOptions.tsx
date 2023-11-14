"use client";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const sortingMap = {
  AZ: "a-z",
  ZA: "z-a",
};

const SortingOptions = () => {
  const form = useForm();

  function onSubmit(values: any) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onChange={form.handleSubmit(onSubmit)}
        className="w-[220px] ml-auto"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.entries(sortingMap).map((item) => {
                    return (
                      <SelectItem value={`${item}`} key={`${item}`}>
                        {item[1]}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default SortingOptions;
