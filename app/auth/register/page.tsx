import { TechList } from '@/components/TechList';
import { AuthFormCard } from '@/components/auth/auth-form-card';
import { RegisterForm } from '@/components/auth/register-form';
import { MobileLogo } from '@/components/mobile-logo';

const RegisterPage = () => {
  return (
    <>
      <MobileLogo />
      <div className='flex flex-col items-center space-y-6 sm:p-4 md:p-0'>
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
        <TechList />
      </div>
    </>
  );
};

export default RegisterPage;
