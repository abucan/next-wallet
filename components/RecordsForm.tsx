"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { recordSchema } from "@/ts/form-schemas/form-schemas";
import { SubmitHandler, useForm } from "react-hook-form";
import FormFieldInput from "@/components/FormInput";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import AccountSelect from "./AccountSelect";
import RecordTypeSelect from "./RecordTypeSelect";
import CategorySelect from "./CategorySelect";
import DataSelect from "./DateSelect";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type FormValues = z.infer<typeof recordSchema>;

interface AccountFormProps {
  submit: SubmitHandler<FormValues>;
  isEditing: boolean;
  initialValues?: FormValues;
  isLoadingSubmit?: boolean;
}

const RecordsForm = ({
  submit,
  isEditing,
  initialValues,
  isLoadingSubmit,
}: AccountFormProps) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(recordSchema),
    defaultValues: {
      ...initialValues,
    },
  });

  const { isSubmitting } = form.formState;

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="w-1/2 space-y-4 border px-6 py-8 rounded-lg bg-card text-card-foreground shadow-sm">
            <div className="flex flex-row gap-x-3 items-center">
                <AccountSelect
                  name="accountId"
                  label="Account type"
                  placeholder="Select an account type"
                 // initialValue={initialValues?.accountId}
                />
              <RecordTypeSelect
                name="recordType"
                label="Record Type"
                placeholder="Select an record type"
                initialValue={initialValues?.recordType}
              />
            </div>
            <div className="flex flex-row gap-x-3 items-center">
              <FormFieldInput
                name="amount"
                label="Account balance"
                placeholder="Enter the starting balance"
              />
              <FormFieldInput
                name="currency"
                label="Currency"
                placeholder="EUR"
              />
            </div>
            <CategorySelect
              name="category"
              label="Category type"
              placeholder="Select an category type"
              initialValue={initialValues?.category}
            />
            <DataSelect
              name="date"
              label="Select a record date"
              placeholder="Pick a date"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isEditing
                ? isLoadingSubmit
                  ? "Editing..."
                  : "Edit record"
                : isLoadingSubmit
                ? "Creating..."
                : "Create a record"}
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default RecordsForm;
