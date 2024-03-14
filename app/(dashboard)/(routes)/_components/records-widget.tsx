import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { getRecords } from '@/actions/get-records';
import { DashRecordItem } from './dash-record-item';
import { Separator } from '@/components/ui/separator';
import { CalendarCheck2 } from 'lucide-react';

export const RecordsWidget = async () => {
  const records = await getRecords(5);
  return (
    <Card>
      <CardHeader className='space-y-2'>
        <CardTitle className='flex flex-row space-x-2 items-center justify-start'>
          <div className='bg-muted rounded p-1 w-10 flex items-center justify-center'>
            <CalendarCheck2 size={24} />
          </div>
          <p className='text-lg font-mono font-[300]'>Last Records</p>
        </CardTitle>
        <Separator />
        <CardDescription className='text-base font-mono text-tertiary'>
          All Time
        </CardDescription>
      </CardHeader>
      {records.length > 0 ? (
        <CardContent className='flex flex-col space-y-4'>
          {records.map((record) => {
            return (
              <DashRecordItem
                recordCategory={record.category}
                recordAmount={record.amount}
                recordType={record.recordType}
                key={record.id}
              />
            );
          })}
        </CardContent>
      ) : (
        <CardContent className='flex flex-col space-y-4'>
          There are currently no records.
        </CardContent>
      )}
    </Card>
  );
};
