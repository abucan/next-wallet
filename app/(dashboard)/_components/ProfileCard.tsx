import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import { MoreVertical } from 'lucide-react';

interface ProfileCardProps {
  username: string;
  email: string;
}

const ProfileCard = ({ username, email }: ProfileCardProps) => {
  return (
    <>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <p className='text-sm font-bold text-gray-700/80'>
          {username}
        </p>
        <p className='text-xs text-gray-700/60'>{email}</p>
      </div>
      <button>
        <MoreVertical size={20} />
      </button>
    </>
  );
};

export default ProfileCard;
