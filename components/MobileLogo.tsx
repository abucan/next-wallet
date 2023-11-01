import Logo from './Logo';

export default function MobileLogo() {
  return (
    <div className='lg:hidden w-full flex justify-center items-center'>
      <div className='flex items-center justify-start p-8'>
        <Logo />
      </div>
    </div>
  );
}
