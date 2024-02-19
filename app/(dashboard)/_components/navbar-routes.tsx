import { ModeToggle } from './mode-toggle';
import { UserButton } from './user-button';

export const NavbarRoutes = () => {
  return (
    <div className='flex flex-row space-x-4 items-center justify-center'>
      <ModeToggle />
      <UserButton />
    </div>
  );
};
