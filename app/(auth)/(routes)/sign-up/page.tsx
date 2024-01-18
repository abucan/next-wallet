import { MobileLogo } from '@/components/MobileLogo';
import { AuthHeader } from '../_components/AuthHeader';
import { AuthCardForm } from '../_components/AuthFormCard';
import { RegisterForm } from './_components/RegisterForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const SignUpPage = async () => {
  const session = await getServerSession();

  if (session) {
    return redirect('/');
  }

  return (
    <>
      <AuthHeader
        label='Already have an account?'
        buttonText='Sign In'
        href='/sign-in'
      />
      <MobileLogo />
      <AuthCardForm
        cardTitle='Sign Up!'
        cardDescription='Create a new account'
        cardFooterText='Already have an account?'
        href='/sign-in'
        linkText='Sign In'
      >
        <RegisterForm />
      </AuthCardForm>
    </>
  );
};

export default SignUpPage;
