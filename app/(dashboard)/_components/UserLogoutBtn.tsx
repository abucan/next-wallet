"use client";

import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

import { signOut } from "next-auth/react";

const UserLogoutBtn = () => {
  return (
    <Button size="default" variant="destructive" onClick={() => signOut({redirect: true})}>
      <LogOut className="mr-2 h-4 w-4" />
      Sign Out
    </Button>
  );
};

export default UserLogoutBtn;
