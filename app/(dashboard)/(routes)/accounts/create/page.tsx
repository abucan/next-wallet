"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import { AccountProps } from "@/ts/interfaces/app_interfaces";
import FormFieldInput from "@/components/FormInput";
import SelectInput from "@/components/SelectInput";
import ColorInput from "@/components/ColorInput";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ArrowLeft, X, XCircle } from "lucide-react";

const accountColors = ["red", "green", "blue", "yellow"];
const accountTypes = ["general", "cash", "credit_card"];

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Account name must be at least 3 characters long",
  }),
  color: z.string().refine((value) => accountColors.includes(value), {
    message: "Invalid account color",
  }),
  type: z.string().refine((value) => accountTypes.includes(value), {
    message: "Invalid account type",
  }),
  balance: z.coerce
    .number()
    .min(1, { message: "Please enter a value greater than 0" }),
});

type FormValues = z.infer<typeof formSchema>;

interface DefaultValues {
  account?: AccountProps | null;
}

const CreateAccountPage = ({ account }: DefaultValues) => {
  const router = useRouter();
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const { isSubmitting } = form.formState;

  const { mutate: createPost } = useMutation({
    mutationFn: (account: AccountProps) => {
      return axios.post("/api/accounts/create", account);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Account created successfully.",
        variant: "default",
      });
      router.push("/accounts");
      router.refresh();
    },
  });

  const onSubmit = async (values: FormValues) => {
    createPost(values);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between p-6">
        <div className="flex flex-row space-x-2 items-center justify-between w-full text-xl font-light">
          <p>Create an account</p>
          <Link
            href="/accounts"
            className="flex flex-row items-center justify-center"
          >
            <Button variant="destructive">
              <XCircle className="h-5 w-5 mr-2" />
              Cancel
            </Button>
          </Link>
        </div>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="pt-12 w-full flex flex-col items-center justify-center"
        >
          <div className="w-1/3 space-y-4 border p-6 rounded-lg bg-card text-card-foreground shadow-sm">
            <div className="flex flex-row gap-x-3 items-center">
              <FormFieldInput
                name="name"
                label="Account name"
                placeholder="Enter your account name"
              />
              <ColorInput
                name="color"
                label="Color"
                placeholder="Pick your account color"
                initialValue={account?.color || ""}
              />
            </div>
            <SelectInput
              name="type"
              label="Account type"
              placeholder="Pick your account type"
            />

            <FormFieldInput
              name="balance"
              label="Account balance"
              placeholder="Enter your starting balance"
            />
            <Button type="submit" disabled={isSubmitting}>
              Create an account
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default CreateAccountPage;
