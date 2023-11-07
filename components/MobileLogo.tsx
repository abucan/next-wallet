import Logo from './Logo';

const MobileLogo = () => {
  return (
    <div className='lg:hidden w-full flex justify-center items-center'>
      <div className='flex items-center justify-start p-8'>
        <Logo />
      </div>
    </div>
  );
}

export default MobileLogo;
