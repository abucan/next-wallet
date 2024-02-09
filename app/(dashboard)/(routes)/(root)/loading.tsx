import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className='w-full grid place-items-center animate-spin'>
      <Loader size={30} />
    </div>
  );
}
