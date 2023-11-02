import MobileSidebar from "./MobileSidebar";
import NavbarRoutes from "./NavbarRoutes";

export default function Navbar() {
    return <div className="flex items-center justify-between bg-white p-4 h-full">
        <MobileSidebar />
        <NavbarRoutes />
    </div>
}