import Logo from "@/components/Logo";
import SidebarRoutes from "./SidebarRoutes";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProfileCard from "./ProfileCard";
import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserLogoutBtn from "./UserLogoutBtn";

const Sidebar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-full flex flex-col overflow-y-auto bg-slate-50 items-center">
      <div className="my-6">
        <Logo width={200} />
      </div>
      <div className="flex flex-col w-full h-full mt-6 p-2 ">
        <SidebarRoutes />
        <div className="flex flex-col w-full mt-auto space-y-4">
          {session?.user && <UserLogoutBtn />}
          <Separator />
          <div className="flex flex-row gap-x-2 pb-6 items-center justify-center">
            <ProfileCard username="antebucan" email="antebucan@gmail.com" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
