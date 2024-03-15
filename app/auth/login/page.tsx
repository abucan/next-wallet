import { TechList } from '@/components/TechList';
import { AuthFormCard } from '@/components/auth/auth-form-card';
import { LoginForm } from '@/components/auth/login-form';
import { MobileLogo } from '@/components/mobile-logo';

const LoginPage = () => {
  return (
    <>
      <MobileLogo />
      <div className='flex flex-col items-center space-y-6 sm:p-4 md:p-0'>
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
        <TechList />
      </div>
    </>
  );
};

export default LoginPage;
