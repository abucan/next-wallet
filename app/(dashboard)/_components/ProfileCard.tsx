import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import UserLogoutBtn from './UserLogoutBtn';

const ProfileCard = async () => {
  // const session = await getServerSession(authOptions);
  return (
    <>
      {/* {!!session && ( */}
      <div className='flex flex-row w-full justify-between space-x-2'>
        <div className='flex flex-row space-x-3 items-center justify-center'>
          <Avatar>
            <AvatarImage src='https://github.com/shadcn.png' />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className='text-base font-[500] text-tertiary font-mono'>
              {/* {session?.user?.username} */}
            </p>
          </div>
        </div>
        <UserLogoutBtn />
      </div>
      {/* )} */}
    </>
  );
};

export default ProfileCard;
