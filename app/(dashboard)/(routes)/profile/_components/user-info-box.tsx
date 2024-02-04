import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type UserInfoBox = {
  text: string;
  label: string;
};

export const UserInfoBox = ({ label, text }: UserInfoBox) => {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label htmlFor='email'>{label}</Label>
      <Input value={text} disabled />
    </div>
  );
};
