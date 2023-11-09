import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authOptions } from "@/lib/auth";
import { MoreVertical } from "lucide-react";
import { getServerSession } from "next-auth";

const ProfileCard = async () => {
  const session = await getServerSession(authOptions);
  return (
    <>
      {!!session && (
        <>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-bold text-gray-700/80">
              {session?.user?.username}
            </p>
            <p className="text-xs text-gray-700/60">{session?.user?.email}</p>
          </div>
          <button>
            <MoreVertical size={20} />
          </button>
        </>
      )}
    </>
  );
};

export default ProfileCard;
