import Link from "next/link";
import SearchInput from "./SearchInput";
import { Button } from "@/components/ui/button";
import { CopyPlus, FolderPlus } from "lucide-react";

const NavbarRoutes = () => {
  return (
    <>
      <div className="flex flex-row gap-x-4 items-center justify-center ml-auto">
        <SearchInput />
        <Button variant="outline" size="sm">
          <CopyPlus className="mr-2 h-5 w-5" />
          Record
        </Button>
        <Link href="/accounts/create">
          <Button variant="ghost" size="sm">
            <FolderPlus className="mr-2 h-5 w-5" />
            Add Account
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NavbarRoutes;
