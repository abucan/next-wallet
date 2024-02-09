import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

export interface SidebarRoutesProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

export const DashWidget = ({
  icon: Icon,
  title,
  content,
}: SidebarRoutesProps) => {
  return (
    <Card className='flex flex-row items-center justify-between'>
      <CardHeader className='space-y-2'>
        <CardTitle>
          <div className='bg-gray-200 rounded p-1 w-10 flex items-center justify-center'>
            <Icon />
          </div>
        </CardTitle>
        <CardDescription className='text-base font-mono text-tertiary'>
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent className=''>
        <p className='text-3xl font-mono font-[300]'>{content}</p>
      </CardContent>
    </Card>
  );
};
