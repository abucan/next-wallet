import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

type Props = {
  children: React.ReactNode;
  text: string;
};

export const TooltipIcon = ({ children, text }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className='cursor-pointer'>
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
