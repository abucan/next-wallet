import { UserProfile, currentUser } from '@clerk/nextjs';

const UserPage = async () => {
  const user = await currentUser();
  console.log(user);

  return <UserProfile path='/user' routing='path' />;
};

export default UserPage;
