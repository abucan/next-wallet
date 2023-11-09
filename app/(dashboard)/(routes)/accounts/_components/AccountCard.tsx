import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CreditCard, Pencil, Trash } from "lucide-react";

const AccountCard = () => {
  return (
    <Card className="flex flex-row items-center justify-between p-3">
      <div className="flex flex-row space-x-2 items-center justify-center">
        <CreditCard />
        <p>Credit Card</p>
        <div className="bg-red-500 py-1 px-4 rounded-full text-white flex items-center justify-center">cash</div>
      </div>
      <div>EUR 1000</div>
      <div className="flex flex-row space-x-4">
        <Button variant="outline">
          <Pencil className="h-4 w-4 mr-2" />
          Edit
        </Button>
        <Button variant="destructive">
          <Trash className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>
    </Card>
  );
};

export default AccountCard;
