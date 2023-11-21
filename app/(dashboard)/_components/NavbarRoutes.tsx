import Link from "next/link";
import ProfileCard from "./ProfileCard";
import { CopyPlus, FolderPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavbarRoutes = () => {
  return (
    <>
      <div className="flex flex-row gap-x-4 items-center w-full">
        <Button
          variant="ghost"
          size="sm"
          className="font-mono text-[400] text-primaryGrey text-sm"
        >
          <CopyPlus className="mr-2 h-5 w-5" />
          Track expense
        </Button>
        <Link href="/accounts/create">
          <Button
            variant="ghost"
            size="sm"
            className="font-mono text-[400] text-primaryGrey text-sm"
          >
            <FolderPlus className="mr-2 h-5 w-5" />
            Add Account
          </Button>
        </Link>
        <div className="ml-auto">
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default NavbarRoutes;
