import { Separator } from "@/components/ui/separator";
import MobileSidebar from "./MobileSidebar";
import NavbarRoutes from "./NavbarRoutes";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-6 h-full md:pr-12 md:px-0">
        <MobileSidebar />
        <NavbarRoutes />
      </div>
      <div>
        <Separator />
      </div>
    </>
  );
};

export default Navbar;
