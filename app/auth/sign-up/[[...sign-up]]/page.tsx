import { SignUp } from '@clerk/nextjs';
import MobileLogo from '@/components/MobileLogo';

export default function Page() {
  return (
    <>
      <MobileLogo />
      <SignUp />
    </>
  );
}
