import { CreditCard, Pencil, Trash } from "lucide-react";
import { AccountCardProps } from "@/ts/interfaces/app_interfaces";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AccountCard = ({ account }: AccountCardProps) => {  
  return (
    <Card className="flex flex-row items-center justify-between p-3">
      <div className="flex flex-row space-x-2 items-center justify-center text-lg font-light">
        <CreditCard style={{ color: account.color, opacity: 0.75 }} />
        <p>{account.name}</p>
        <div className="bg-slate-200 py-0.5 px-4 rounded-full text-black text-base uppercase font-bold flex items-center justify-center">
          {account.type}
        </div>
      </div>
      <div>
        <p className="text-lg font-light">
          {account.balance}
          <span className="font-bold"> EUR</span>
        </p>
      </div>
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
