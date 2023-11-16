import PageHeader from '@/components/PageHeader';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const AccountsLayout = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession(authOptions);
  if (!session) return redirect('/sign-in');
  return (
    <>
      <PageHeader title={'Accounts'} href='/accounts' />
      <div className='p-6 flex flex-col'>{children}</div>
    </>
  );
};

export default AccountsLayout;
