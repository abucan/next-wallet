import { CheckCircleIcon } from 'lucide-react';

interface FormMessageProps {
  message?: string;
}

export const FormSuccess = ({ message }: FormMessageProps) => {
  if (!message) return null;
  return (
    <div className='bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500'>
      <CheckCircleIcon className='w-4 h-4' />
      <p>{message}</p>
    </div>
  );
};
