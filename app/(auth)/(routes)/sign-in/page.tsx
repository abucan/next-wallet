import MobileLogo from '@/components/MobileLogo';
import AuthHeader from '../_components/AuthHeader';
import AuthFormCard from '../_components/AuthFormCard';
import LoginForm from './_components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function SignIn() {
  const session = await getServerSession();

  if(session) {
    return redirect('/')
  }

  return (
    <>
      <AuthHeader
        label="Don't have an account?"
        buttonText='Sign Up'
        href='/sign-up'
      />
      <MobileLogo />
      <AuthFormCard
        cardTitle='Welcome back!'
        cardDescription='Sign in to your account'
        cardFooterText="Don't have an account?"
        href='/sign-up'
        linkText='Sign Up'
      >
        <LoginForm />
      </AuthFormCard>
    </>
  );
}
