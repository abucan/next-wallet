import { AuthFormCard } from '@/components/auth/auth-form-card';
import { LoginForm } from '@/components/auth/login-form';
import { MobileLogo } from '@/components/mobile-logo';

const LoginPage = () => {
  return (
    <>
      <MobileLogo />
      <AuthFormCard
        cardTitle='Welcome back!'
        cardDescription='Sign in to your account'
        cardFooterText="Don't have an account?"
        href='/auth/register'
        linkText='Register'
        showSocial
      >
        <LoginForm />
      </AuthFormCard>
    </>
  );
};

export default LoginPage;
