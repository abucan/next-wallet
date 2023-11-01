import MobileLogo from '@/components/MobileLogo';
import AuthHeader from '../_components/AuthHeader';
import AuthFormCard from '../_components/AuthFormCard';
import RegisterForm from './_components/RegisterForm';

export default function SignUp() {
  return (
    <>
      <AuthHeader
        label='Already have an account?'
        buttonText='Sign In'
        href='/sign-in'
      />
      <MobileLogo />
      <AuthFormCard
        cardTitle='Sign Up!'
        cardDescription='Create a new account'
        cardFooterText='Already have an account?'
        href='/sign-in'
        linkText='Sign In'
      >
        <RegisterForm />
      </AuthFormCard>
    </>
  );
}
