import { SignUp } from '@clerk/nextjs';
import { MobileLogo } from '@/components/mobile-logo';

export default function Page() {
  return (
    <>
      <MobileLogo />
      <SignUp />
    </>
  );
}
