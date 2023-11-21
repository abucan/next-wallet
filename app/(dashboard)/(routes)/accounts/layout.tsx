// import PageHeader from '@/components/PageHeader';
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const AccountsLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) return redirect("/sign-in");
  return (
    <>
      {/* <PageHeader title={'Accounts'} href='/accounts' /> rootE */}
      <div className="md:pr-12 flex flex-col">{children}</div>
    </>
  );
};

export default AccountsLayout;
