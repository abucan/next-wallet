import { MobileLogo } from '@/components/MobileLogo';
import { AuthHeader } from '../_components/AuthHeader';
import { AuthCardForm } from '../_components/AuthFormCard';
import { LoginForm } from './_components/LoginForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
  const session = await getServerSession();

  if (session) {
    return redirect('/');
  }

  return (
    <>
      <AuthHeader
        label="Don't have an account?"
        buttonText='Sign Up'
        href='/sign-up'
      />
      <MobileLogo />
      <AuthCardForm
        cardTitle='Welcome back!'
        cardDescription='Sign in to your account'
        cardFooterText="Don't have an account?"
        href='/sign-up'
        linkText='Sign Up'
      >
        <LoginForm />
      </AuthCardForm>
    </>
  );
};

export default SignInPage;
