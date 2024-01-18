import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className='w-full grid place-items-center animate-spin'>
      <Loader size={30} />
    </div>
  );
};

export default Loading;
