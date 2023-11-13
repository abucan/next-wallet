"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
  const [value, setValue] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className="relative hidden lg:block">
      <Search className="h-4 w-4 absolute top-2.5 left-3 text-slate-600" />
      <Input
        className="w-full md:w-[250px] pl-9 bg-slate-100 focus-visible:ring-slate-300"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchInput;
