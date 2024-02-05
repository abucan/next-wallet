import { AuthFormCard } from '@/components/auth/auth-form-card';
import { RegisterForm } from '@/components/auth/register-form';
import { MobileLogo } from '@/components/mobile-logo';

const RegisterPage = () => {
  return (
    <>
      <MobileLogo />
      <AuthFormCard
        cardTitle='First time here?'
        cardDescription='Create a new account'
        cardFooterText='Already have an account?'
        href='/auth/login'
        linkText='Login'
        showSocial
      >
        <RegisterForm />
      </AuthFormCard>
    </>
  );
};

export default RegisterPage;
