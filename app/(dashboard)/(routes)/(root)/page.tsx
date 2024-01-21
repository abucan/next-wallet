import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) return redirect('/auth/sign-in');
  return (
    <div className=''>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>
        Dashboard
      </h1>
    </div>
  );
}
