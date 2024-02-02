import Image from 'next/image';
// import { currentUser } from '@clerk/nextjs';
import { UserInfoBox } from './_components/user-info-box';

const UserPage = async () => {
  // const user = await currentUser();
  // console.log(user);

  return (
    <div className='space-y-10 w-full'>
      <h1 className='font-mono font-[500] text-2xl text-tertiary'>
        Your Profile
      </h1>
      {/* <div className='flex items-start justify-center flex-col w-full max-w-full'>
        {user &&
          user.username &&
          user.firstName &&
          user.lastName &&
          user.emailAddresses && (
            <div className='flex flex-row space-x-20 w-full'>
              <Image
                src={user.imageUrl}
                alt='profile picture'
                width={100}
                height={100}
                className='rounded-full w-[200px]'
              />
              <div className='w-full'>
                <UserInfoBox label='Username' text={user.username} />
                <UserInfoBox
                  label='First name'
                  text={user.firstName}
                />
                <UserInfoBox label='Last name' text={user.lastName} />
                <UserInfoBox
                  label='Email address'
                  text={user.emailAddresses[0].emailAddress}
                />
              </div>
            </div>
          )}
      </div> */}
    </div>
  );
};

export default UserPage;
