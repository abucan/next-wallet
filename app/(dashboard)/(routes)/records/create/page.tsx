"use client";

import RecordsForm from "@/components/RecordsForm";
import { toast } from "@/components/ui/use-toast";
import { RecordProps } from "@/ts/interfaces/app_interfaces";
// import { FormValues } from "@/ts/types/app_types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

const CreateRecordPage = () => {
  const router = useRouter();

  const { mutate: createPost, status } = useMutation({
    mutationFn: (record: RecordProps) => {
      return axios.post("/api/records", record);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Record created successfully.\nAccount updated successfully.",
        variant: "default",
      });
      router.push("/records");
      router.refresh();
    },
  });

  const isLoadingSubmit = status === "pending";

  const handleCreateRecord: SubmitHandler<any> = (values: any) => {
    createPost(values);
  };

  return (
    <>
      <RecordsForm
        submit={handleCreateRecord}
        isEditing={false}
        isLoadingSubmit={isLoadingSubmit}
      />
    </>
  );
};

export default CreateRecordPage;
