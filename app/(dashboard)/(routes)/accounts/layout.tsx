import { authOptions } from '@/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const AccountsLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if (!session) return redirect('/sign-in');
  return (
    <>
      <div className='md:pr-12 flex flex-col'>{children}</div>
    </>
  );
};

export default AccountsLayout;
