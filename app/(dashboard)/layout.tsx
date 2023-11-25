import { PropsWithChildren } from "react";
import Navbar from "./_components/Navbar";
import Sidebar from "./_components/Sidebar";

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="h-full">
      <div className="h-[75px] md:pl-72 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex w-60 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-72 pt-[75px] h-full w-full">
        <div className="pt-6">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
